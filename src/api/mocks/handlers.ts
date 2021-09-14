import {rest} from 'msw';
import mockProducts from './products.json';

export const handlers = [
  rest.get(
    'https://my-json-server.typicode.com/benirvingplt/products/products',
    (req, res, ctx) => {
      return res(ctx.json(mockProducts));
    },
  ),
];
