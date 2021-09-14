import React, {useContext} from 'react';
import {useEffect} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity} from 'react-native';
import ShopContext from '../context/ShopContext';

const Item = ({item}) => {
  const context = useContext(ShopContext);
  const [quantity, onChangeQuantity] = React.useState('' + item.quantity);
  useEffect(() => {
    onChangeQuantity('' + item.quantity);
  }, [item.quantity]);
  return (
    <>
      <Text>{item.name}</Text>
      <Text>Quantity</Text>
      <TextInput
        keyboardType="numeric"
        value={quantity}
        onChangeText={onChangeQuantity}
      />
      <TouchableOpacity
        onPress={() => {
          context.updateQuantityInBasket(item.productId, quantity);
        }}>
        <Text>Update quantity</Text>
      </TouchableOpacity>
    </>
  );
};

const Basket = () => {
  const context = useContext(ShopContext);

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <FlatList
      data={context.basket}
      renderItem={renderItem}
      keyExtractor={x => x.productId}
    />
  );
};

export default Basket;
