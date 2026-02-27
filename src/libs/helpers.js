export function formatCompactNumber(value) {
  if (value === null || value === undefined) return "0";

  const absValue = Math.abs(value);

  if (absValue < 1000) {
    return value.toString();
  }

  const units = ["K", "M", "B", "T"];
  let unitIndex = -1;
  let scaled = absValue;

  while (scaled >= 1000 && unitIndex < units.length - 1) {
    scaled /= 1000;
    unitIndex++;
  }

  const formatted = scaled % 1 === 0 ? scaled.toFixed(0) : scaled.toFixed(1);

  return `${value < 0 ? "-" : ""}${formatted}${units[unitIndex]}`;
}
