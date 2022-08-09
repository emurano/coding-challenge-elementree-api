import express, { NextFunction, Request, Response } from 'express';
import { query, validationResult } from 'express-validator';
import isValidLongitude from '../../validators/longitude-validator';
import { getLocations } from './locations.controller';
import { handleValidationErrors } from '../validation-error-handler';
import isValidLatitude from '../../validators/latitude-validator';

const validationRules = [
    query('swlat')
      .exists()
      .withMessage('south-west latitude is required')
      .isNumeric()
      .withMessage('south-west latitude must be a number')
      .custom(isValidLatitude)
    ,
    query('swlng')
      .exists()
      .withMessage('south-west longitude is required')
      .isNumeric()
      .withMessage('south-west longitude must be a number')
      .custom(isValidLongitude),

    query('nelat')
      .exists()
      .withMessage('north-east latitude is required')
      .isNumeric()
      .withMessage('north-east latitude must be a number')
      .custom(isValidLatitude)
    ,
    query('nelng')
      .exists()
      .withMessage('north-east longitude is required')
      .isNumeric()
      .withMessage('north-east longitude must be a number')
      .custom(isValidLongitude),

    handleValidationErrors
];

const locationsRouter = express.Router();

locationsRouter.route('').get(validationRules, getLocations);

export { locationsRouter };