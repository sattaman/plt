export const getProducts = () =>
  fetch(
    'https://my-json-server.typicode.com/benirvingplt/products/products',
  ).then(x => x.json());
