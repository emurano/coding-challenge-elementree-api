import isValidLatitude from './latitude-validator';
import { emptyMeta } from '../test-utils/test-fixtures';
import expect from 'expect';

describe('isValidLatitude', () => {
  it('value is undefined, validator returns true', () => {
    expect(isValidLatitude(undefined, emptyMeta)).toEqual(true);
  });

  it('value is null, validator returns true', () => {
    expect(isValidLatitude(null, emptyMeta)).toEqual(true);
  });

  it('value is empty string, validator returns true', () => {
    expect(isValidLatitude('', emptyMeta)).toEqual(true);
  });

  it('value is an integer, but is less than -90, validator throws error', () => {
    expect(() => isValidLatitude(-91, emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  it('value is an integer, but is greater than 90, validator throws error', () => {
    expect(() => isValidLatitude(91, emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  it('value is an integer, and is between -90 and 90, validator returns true', () => {
    expect(isValidLatitude(undefined, emptyMeta)).toEqual(true);
  });

  it('value is a float, but is less than -90, validator throws error', () => {
    expect(() => isValidLatitude(-90.23, emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  it('value is a float, but is greater than 90, validator throws error', () => {
    expect(() => isValidLatitude(90.3434, emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  it('value is an float, and is between -90 and 90, validator returns true', () => {
    expect(isValidLatitude(78.32434, emptyMeta)).toEqual(true);
  });

  it('value is a string, but not a number, validator throws error', () => {
    expect(() => isValidLatitude('sdklasd', emptyMeta))
      .toThrowError('latitude must be a number');
  });

  it('value is a string, and is an integer less then -90, validator throws error', () => {
    expect(() => isValidLatitude('-91', emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  it('value is a string, and is an integer greater then 90, validator throws error', () => {
    expect(() => isValidLatitude('91', emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  it('value is a string, and is an integer between -90 and 90, validator returns true', () => {
    expect(isValidLatitude(70.32434, emptyMeta)).toEqual(true);
  });

  it('value is a string, and is a float less then -90, validator throws error', () => {
    expect(() => isValidLatitude('-90.1000', emptyMeta))
      .toThrowError('latitude must be greater than or equal to -90');
  });

  it('value is a string, and is a float greater then 90, validator throws error', () => {
    expect(() => isValidLatitude('90.1000', emptyMeta))
      .toThrowError('latitude must be less than or equal to 90');
  });

  it('value is a string, and is a float between -90 and 90, validator returns true', () => {
    expect(isValidLatitude('70.32434', emptyMeta)).toEqual(true);
  });
});