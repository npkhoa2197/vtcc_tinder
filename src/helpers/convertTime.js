export const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = `0${date.getMinutes()}`;
  // Seconds part from the timestamp
  // const seconds = `0${date.getSeconds()}`;

  // Will display time in 10:30:23 format
  const formattedTime = `${hours}:${minutes.substr(-2)}`;

  return formattedTime;
};

export const convertSeconds = (milliSeconds) => {
  const hour = Math.floor((milliSeconds / (1000 * 60 * 60)) % 24);
  const min = Math.floor((milliSeconds / (1000 * 60)) % 60);
  const second = Math.floor((milliSeconds / 1000) % 60);

  if (hour > 0) return `${hour}h trước`;
  if (min > 0) return `${min}p trước`;
  if (second > 0) return `${second}s trước`;

  return '0s trước';
};
