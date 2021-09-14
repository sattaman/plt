import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './scenes/Products';
import Basket from './scenes/Basket';
import {ShopProvider} from './context/ShopContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ShopProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Basket" component={Basket} />
        </Tab.Navigator>
      </NavigationContainer>
    </ShopProvider>
  );
};

export default App;
