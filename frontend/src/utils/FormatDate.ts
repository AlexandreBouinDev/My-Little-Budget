export function FormatDate(date: Date) {
  let UTCDate = new Date(date);
  let formattedDate = UTCDate.toLocaleDateString().slice(0, -5);
  return formattedDate;
}
