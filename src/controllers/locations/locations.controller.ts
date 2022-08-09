import { Request, Response } from 'express';

const NUM_LOCATIONS = 10;

function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getLocations(req: Request, res: Response) {

  const swlat = parseFloat(req.query.swlat as string);
  const swlng = parseFloat(req.query.swlng as string);
  const nelat = parseFloat(req.query.nelat as string);
  const nelng = parseFloat(req.query.nelng as string);

  const locations = [];
  for (let i = 1; i <= NUM_LOCATIONS; i++) {
    locations.push({
      lat: randomNumber(swlat, nelat),
      lng: randomNumber(swlng, nelng)
    });
  }
  res.send(locations);
}

export { getLocations };