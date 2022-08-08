import { Meta } from 'express-validator';

const emptyMeta: Meta = {
  location: 'query',
  req: {},
  path: ''
};

export { emptyMeta };