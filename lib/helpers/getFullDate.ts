export default function getFullDate(isoDate: string): string {
  const date = new Date(isoDate);

  // Define month names array
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract day, month, and year
  const day: number = date.getDate();
  const monthIndex: number = date.getMonth();
  const year: number = date.getFullYear();

  // Format the date
  const formattedDate: string = `${day} ${months[monthIndex]}, ${year}`;

  return formattedDate;
}
