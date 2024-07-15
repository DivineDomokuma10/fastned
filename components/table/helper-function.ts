export function getRowBg(index: number): string {
  if (index % 2 !== 0) {
    return "#80808020";
  }

  return "";
}
