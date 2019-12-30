function isLeapYear(input) {
  let date = new Date(input);
  let year = date.getFullYear();
  let output;
  if (isNaN(year)) {
    output = 'Invalid Date';
  } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    output = `${year} is a leap year`;
  } else {
    output = `${year} is not a leap year`;
  }
  return output;
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);
