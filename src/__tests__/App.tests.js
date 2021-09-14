import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';
import {server} from '../api/mocks/server';
import mockProducts from '../api/mocks/products.json';

describe('Products', () => {
  // establish API mocking before all tests
  beforeAll(() => {
    global.fetch = require('node-fetch');
    server.listen();
  });
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers());
  // clean up once the tests are done
  afterAll(() => server.close());

  it('Products are loaded and all are displayed', async () => {
    const {findByText} = render(<App />);
    for (var i = 0; i < mockProducts.length; i++) {
      await findByText(mockProducts[i].name);
    }
  });
  it('Clicking on add to basket adds item to basket', async () => {});

  it('Clicking on add to basket twice adds item to basket with quantity 2', async () => {});

  it('Adding multiple items causes all to be displayed on basket page with correct quantities', async () => {});

  it('Updating the quantity of item is persisted when navigating', async () => {});

  it('Updating the quantity of item then adding it again gives correct quantity', async () => {});

  it('Updating the quantity of item to 0 causes it to be removed from the basket', async () => {});
});
