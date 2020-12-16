export const formatDate = (date) => {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate().toString();
  const hours = date.getHours().toString();
  const min = date.getMinutes().toString();
  const sec = date.getSeconds().toString();
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
  return `${day.padStart(2, "0")} ${
    monthNames[month]
  } ${year} - ${hours.padStart(2, "0")}:${min.padStart(2, "0")}:${sec.padStart(
    2,
    "0"
  )}`;
};
