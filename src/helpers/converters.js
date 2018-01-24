const convertDateToShortUTC = (date) => {
  const START_DATE_POSITION = 5;
  const END_DATE_POSITION = 11;
  return new Date(date).toUTCString().substr(START_DATE_POSITION, END_DATE_POSITION);
};

export default convertDateToShortUTC;
