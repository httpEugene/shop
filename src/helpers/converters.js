const convertDateToShortUTC = (date) => {
  return new Date(date).toUTCString().substr(5, 11);
};

export default convertDateToShortUTC;
