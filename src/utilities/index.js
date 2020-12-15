export const formatDate = (date) => {
  date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate().toString();
  const monthNames = [
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
  return `${day.padStart(2, "0")} ${monthNames[month]} ${year}`;
};
