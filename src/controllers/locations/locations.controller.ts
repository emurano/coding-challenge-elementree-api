import { Request, Response } from 'express';

function getLocations(req: Request, res: Response) {
  res.send({ hello: 'world' });
}

export { getLocations };