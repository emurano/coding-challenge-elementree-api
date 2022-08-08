import isValidLatitude from './latitude-validator';
import { emptyMeta } from '../test-utils/test-fixtures';

describe('isValidLatitude', () => {
  test('value is undefined, validator returns true', () => {
    expect(isValidLatitude(undefined, emptyMeta)).toEqual(true);
  });

  test('value is null, validator returns true', () => {
    expect(isValidLatitude(null, emptyMeta)).toEqual(true);
  });

  test('value is empty string, validator returns true', () => {
    expect(isValidLatitude('', emptyMeta)).toEqual(true);
  });

  test('value is an integer, but is less than -180, validator throws error', () => {
    expect(() => isValidLatitude(-181, emptyMeta))
      .toThrowError('latitude must be greater than or equal to -180');
  });

  test('value is an integer, but is greater than 180, validator throws error', () => {
    expect(() => isValidLatitude(181, emptyMeta))
      .toThrowError('latitude must be less than or equal to 180');
  });

  test('value is an integer, and is between -180 and 180, validator returns true', () => {
    expect(isValidLatitude(undefined, emptyMeta)).toEqual(true);
  });

  test('value is a float, but is less than -180, validator throws error', () => {
    expect(() => isValidLatitude(-180.23, emptyMeta))
      .toThrowError('latitude must be greater than or equal to -180');
  });

  test('value is a float, but is greater than 180, validator throws error', () => {
    expect(() => isValidLatitude(180.3434, emptyMeta))
      .toThrowError('latitude must be less than or equal to 180');
  });

  test('value is an float, and is between -180 and 180, validator returns true', () => {
    expect(isValidLatitude(100.32434, emptyMeta)).toEqual(true);
  });

  test('value is a string, but not a number, validator throws error', () => {
    expect(() => isValidLatitude('sdklasd', emptyMeta))
      .toThrowError('latitude must be a number');
  });

  test('value is a string, and is an integer less then -180, validator throws error', () => {
    expect(() => isValidLatitude('-181', emptyMeta))
      .toThrowError('latitude must be greater than or equal to -180');
  });

  test('value is a string, and is an integer greater then 180, validator throws error', () => {
    expect(() => isValidLatitude('181', emptyMeta))
      .toThrowError('latitude must be less than or equal to 180');
  });

  test('value is a string, and is an integer between -180 and 180, validator returns true', () => {
    expect(isValidLatitude(70.32434, emptyMeta)).toEqual(true);
  });

  test('value is a string, and is a float less then -180, validator throws error', () => {
    expect(() => isValidLatitude('-180.1000', emptyMeta))
      .toThrowError('latitude must be greater than or equal to -180');
  });

  test('value is a string, and is a float greater then 180, validator throws error', () => {
    expect(() => isValidLatitude('180.1000', emptyMeta))
      .toThrowError('latitude must be less than or equal to 180');
  });

  test('value is a string, and is a float between -180 and 180, validator returns true', () => {
    expect(isValidLatitude('70.32434', emptyMeta)).toEqual(true);
  });
});