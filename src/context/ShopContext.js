import React, {useState} from 'react';

const ShopContext = React.createContext();

export const ShopProvider = ({children}) => {
  const [products, setProductsState] = useState({});
  const [basket, setBasketState] = useState({});

  const setProducts = productsArray => {
    const prodObj = productsArray.reduce((obj, el) => {
      obj[el.id] = el;
      return obj;
    }, {});
    setProductsState(prodObj);
  };

  const addToBasket = productId => {
    setBasketState(basketContent => {
      const itemQuantityInBasket = basketContent[`${productId}`];
      const quantity = Number(itemQuantityInBasket || 0) + 1;
      return {...basketContent, [productId]: quantity};
    });
  };

  const updateQuantityInBasket = (productId, quantity) => {
    setBasketState(basketContent => {
      const newBasket = {...basketContent, [productId]: quantity};
      if (quantity === 0) {
        delete newBasket[productId];
      }
      return newBasket;
    });
  };

  const productViewModel = Object.values(products);

  const basketViewModel = Object.keys(basket).map(key => ({
    productId: key,
    name: products[key].name,
    quantity: basket[key],
  }));

  return (
    <ShopContext.Provider
      value={{
        products: productViewModel,
        basket: basketViewModel,
        setProducts,
        addToBasket,
        updateQuantityInBasket,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

export const ShopConsumer = ShopContext.Consumer;

export default ShopContext;
