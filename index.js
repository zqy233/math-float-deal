import FileSaver from 'file-saver'
import XLSX from 'xlsx-style-d807'
// 供xlsx-style-d807内部使用
import xlsx from 'xlsx'
export function downloadExcel (sheet, sheetName) {
    FileSaver.saveAs(sheetblob(sheet, sheetName), `${sheetName}.xlsx`)
}
export function getSheets (data) {
    const ws = {}
    const range = {
        s: {
            c: 10000000,
            r: 10000000
        },
        e: {
            c: 0,
            r: 0
        }
    }
    const defaultCellStyle = {
        alignment: {
            horizontal: 'left',
            vertical: 'center',
        }
    }
    for (let R = 0; R !== data.length; ++R) {
        for (let C = 0; C !== data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R
            if (range.s.c > C) range.s.c = C
            if (range.e.r < R) range.e.r = R
            if (range.e.c < C) range.e.c = C
            const cell = {
                v: data[R][C],
                s: defaultCellStyle
            }
            if (cell.v == null) continue
            const cell_ref = XLSX.utils.encode_cell({
                c: C,
                r: R
            })
            if (typeof cell.v === 'number') {
                cell.t = 'n'
            } else if (typeof cell.v === 'boolean') {
                cell.t = 'b'
            } else if (cell.v instanceof Date) {
                cell.t = 'n'
                cell.z = XLSX.SSF._table[14]
                cell.v = dateNum(cell.v)
            } else {
                cell.t = 's'
            }
            ws[cell_ref] = cell
        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
    return ws
}
function sheetblob (sheet, sheetName) {
    sheetName = sheetName || 'sheet1'
    const workbook = {
        SheetNames: [sheetName],
        Sheets: {}
    }
    workbook.Sheets[sheetName] = sheet
    const wopts = {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary'
    }
    const wbOut = XLSX.write(workbook, wopts)
    return new Blob([s2ab(wbOut)], { type: 'application/octet-stream' })
}
function dateNum (v, date1904) {
    if (date1904) v += 1462
    const epoch = Date.parse(v)
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
}
function s2ab (s) {
    const buf = new ArrayBuffer(s.length)
    const view = new Uint8Array(buf)
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf
}
