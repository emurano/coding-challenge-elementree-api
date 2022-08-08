import isValidLongitude from './longitude-validator';
import { emptyMeta } from '../test-utils/test-fixtures';

describe('isValidLongitude', () => {
  test('value is undefined, validator returns true', () => {
    expect(isValidLongitude(undefined, emptyMeta)).toEqual(true);
  });

  test('value is null, validator returns true', () => {
    expect(isValidLongitude(null, emptyMeta)).toEqual(true);
  });

  test('value is empty string, validator returns true', () => {
    expect(isValidLongitude('', emptyMeta)).toEqual(true);
  });

  test('value is an integer, but is less than -90, validator throws error', () => {
    expect(() => isValidLongitude(-91, emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  test('value is an integer, but is greater than 90, validator throws error', () => {
    expect(() => isValidLongitude(91, emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  test('value is an integer, and is between -90 and 90, validator returns true', () => {
    expect(isValidLongitude(undefined, emptyMeta)).toEqual(true);
  });

  test('value is a float, but is less than -90, validator throws error', () => {
    expect(() => isValidLongitude(-90.23, emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  test('value is a float, but is greater than 90, validator throws error', () => {
    expect(() => isValidLongitude(90.3434, emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  test('value is an float, and is between -90 and 90, validator returns true', () => {
    expect(isValidLongitude(70.32434, emptyMeta)).toEqual(true);
  });

  test('value is a string, but not a number, validator throws error', () => {
    expect(() => isValidLongitude('sdklasd', emptyMeta))
      .toThrowError('latitude must be a number');
  });

  test('value is a string, and is an integer less then -90, validator throws error', () => {
    expect(() => isValidLongitude('-91', emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  test('value is a string, and is an integer greater then 90, validator throws error', () => {
    expect(() => isValidLongitude('91', emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  test('value is a string, and is an integer between -90 and 90, validator returns true', () => {
    expect(isValidLongitude(70.32434, emptyMeta)).toEqual(true);
  });

  test('value is a string, and is a float less then -90, validator throws error', () => {
    expect(() => isValidLongitude('-90.1000', emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  test('value is a string, and is a float greater then 90, validator throws error', () => {
    expect(() => isValidLongitude('90.1000', emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  test('value is a string, and is a float between -90 and 90, validator returns true', () => {
    expect(isValidLongitude('70.32434', emptyMeta)).toEqual(true);
  });
});