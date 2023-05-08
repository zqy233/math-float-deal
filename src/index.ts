export function plus(a: number, b: number): number {
  const x = String(a).length - String(a).indexOf(".") - 1;
  const y = String(b).length - String(b).indexOf(".") - 1;
  if (x < y)
    return (
      (Math.round(a * Math.pow(10, y)) + Math.round(b * Math.pow(10, y))) /
      Math.pow(10, y)
    );
  return (
    (Math.round(a * Math.pow(10, x)) + Math.round(b * Math.pow(10, x))) /
    Math.pow(10, x)
  );
}

export function minus(a: number, b: number): number {
  const x = String(a).length - String(a).indexOf(".") - 1;
  const y = String(b).length - String(b).indexOf(".") - 1;
  if (x < y)
    return (
      (Math.round(a * Math.pow(10, y)) - Math.round(b * Math.pow(10, y))) /
      Math.pow(10, y)
    );
  return (
    (Math.round(a * Math.pow(10, x)) - Math.round(b * Math.pow(10, x))) /
    Math.pow(10, x)
  );
}

export function multiply(a: number, b: number): number {
  const x = String(a).length - String(a).indexOf(".") - 1;
  const y = String(b).length - String(b).indexOf(".") - 1;
  if (x < y)
    return (
      (Math.round(a * Math.pow(10, y)) * Math.round(b * Math.pow(10, y))) /
      Math.pow(10, y + y)
    );
  return (
    (Math.round(a * Math.pow(10, x)) * Math.round(b * Math.pow(10, x))) /
    Math.pow(10, x + x)
  );
}

export function divide(a: number, b: number): number {
  const x = String(a).length - String(a).indexOf(".") - 1;
  const y = String(b).length - String(b).indexOf(".") - 1;
  if (x < y)
    return Math.round(a * Math.pow(10, y)) / Math.round(b * Math.pow(10, y));
  return Math.round(a * Math.pow(10, x)) / Math.round(b * Math.pow(10, x));
}
