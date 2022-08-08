import express from 'express';
import cors from 'cors';
import { query, validationResult } from 'express-validator';
import isValidLongitude from './src/validators/longitude-validator';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from express and typescript');
});

app.get(
  '/locations',
  query('swlat')
    .exists()
    .withMessage('south-west latitude is required')
    .isNumeric()
    .withMessage('south-west latitude must be a number')
    .custom(isValidLongitude)
  ,
  query('swlng').exists().isNumeric(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
    }
    res.send('Did it work?');
  });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
