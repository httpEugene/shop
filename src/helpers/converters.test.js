import convertDateToShortUTC from './converters';

describe('convertDateToShortUTC', () => {
  test('should convert date in format YYYY-MM-DD to short UTC format', () => {
    const date = '2018-01-24';
    const expectedValue = '24 Jan 2018';

    expect(convertDateToShortUTC(date)).toEqual(expectedValue);
  });
});
