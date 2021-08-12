export function parseDate(stringDate: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(stringDate));
}
