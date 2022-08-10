import isValidLongitude from './longitude-validator';
import { emptyMeta } from '../test-utils/test-fixtures';
import expect from 'expect';

describe('isValidLongitude', () => {
  it('value is undefined, validator returns true', () => {
    expect(isValidLongitude(undefined, emptyMeta)).toEqual(true);
  });

  it('value is null, validator returns true', () => {
    expect(isValidLongitude(null, emptyMeta)).toEqual(true);
  });

  it('value is empty string, validator returns true', () => {
    expect(isValidLongitude('', emptyMeta)).toEqual(true);
  });

  it('value is an integer, but is less than -180, validator throws error', () => {
    expect(() => isValidLongitude(-181, emptyMeta))
      .toThrowError('longitude must be greater than or equal to -180');
  });

  it('value is an integer, but is greater than 180, validator throws error', () => {
    expect(() => isValidLongitude(181, emptyMeta))
      .toThrowError('longitude must be less than or equal to 180');
  });

  it('value is an integer, and is between -180 and 180, validator returns true', () => {
    expect(isValidLongitude(undefined, emptyMeta)).toEqual(true);
  });

  it('value is a float, but is less than -180, validator throws error', () => {
    expect(() => isValidLongitude(-180.23, emptyMeta))
      .toThrowError('longitude must be greater than or equal to -180');
  });

  it('value is a float, but is greater than 180, validator throws error', () => {
    expect(() => isValidLongitude(180.3434, emptyMeta))
      .toThrowError('longitude must be less than or equal to 180');
  });

  it('value is an float, and is between -180 and 180, validator returns true', () => {
    expect(isValidLongitude(70.32434, emptyMeta)).toEqual(true);
  });

  it('value is a string, but not a number, validator throws error', () => {
    expect(() => isValidLongitude('sdklasd', emptyMeta))
      .toThrowError('longitude must be a number');
  });

  it('value is a string, and is an integer less then -180, validator throws error', () => {
    expect(() => isValidLongitude('-181', emptyMeta))
      .toThrowError('longitude must be greater than or equal to -180');
  });

  it('value is a string, and is an integer greater then 180, validator throws error', () => {
    expect(() => isValidLongitude('181', emptyMeta))
      .toThrowError('longitude must be less than or equal to 180');
  });

  it('value is a string, and is an integer between -180 and 180, validator returns true', () => {
    expect(isValidLongitude(70.32434, emptyMeta)).toEqual(true);
  });

  it('value is a string, and is a float less then -180, validator throws error', () => {
    expect(() => isValidLongitude('-180.1000', emptyMeta))
      .toThrowError('longitude must be greater than or equal to -180');
  });

  it('value is a string, and is a float greater then 90, validator throws error', () => {
    expect(() => isValidLongitude('180.1000', emptyMeta))
      .toThrowError('longitude must be less than or equal to 180');
  });

  it('value is a string, and is a float between -180 and 180, validator returns true', () => {
    expect(isValidLongitude('70.32434', emptyMeta)).toEqual(true);
  });
});