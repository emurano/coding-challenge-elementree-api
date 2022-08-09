import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { locationsRouter } from './src/controllers/locations/locations.router';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());



app.use('/locations', locationsRouter);

const port = process.env.LOCATIONS_APP_PORT || 3001;

app.listen(port, () => console.log(`App listening on PORT ${port}`));

export { app };