import express from 'express';
import cors from 'cors';
import { locationsRouter } from './src/controllers/locations/locations.router';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/locations', locationsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
