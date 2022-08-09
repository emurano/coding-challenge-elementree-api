import { CustomValidator } from 'express-validator';

/**
 * Validates whether the given value is a valid latitude value
 *
 * This validator accepts undefined, null and empty string
 *
 * @param value
 */
const isValidLatitude: CustomValidator = (value) => {
  if (value === undefined) return true;
  if (value === null) return true;
  if (value === '') return true;
  const latitude = convertToNumber(value);

  if (isNaN(latitude)) {
    throw new Error('latitude must be a number');
  }

  if (latitude < -90) {
    throw new Error('latitude must be greater than or equal to -90');
  }

  if (latitude > 90) {
    throw new Error('latitude must be less than or equal to 90');
  }

  return true;
};

function convertToNumber(value: any): number {
  if (typeof value === "string") {
    return parseFloat(value);
  } else if (typeof value === "number") {
    return value;
  } else {
    return NaN;
  }
}

export default isValidLatitude;