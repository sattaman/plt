import React, {useContext, useEffect, useRef} from 'react';
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ShopContext from '../context/ShopContext';
import api from '../api';

const Products = () => {
  const context = useContext(ShopContext);
  const contextRef = useRef(context);

  useEffect(() => {
    api.getProducts().then(products => {
      contextRef.current.setProducts(products);
    });
  }, []);

  const Item = ({item}) => (
    <>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={() => {
          context.addToBasket(item.id);
        }}>
        <Text>Add to basket</Text>
      </TouchableOpacity>
    </>
  );
  return (
    <FlatList
      data={context.products}
      renderItem={Item}
      keyExtractor={x => x.id}
    />
  );
};
export default Products;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});
