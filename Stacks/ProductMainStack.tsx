import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/product/HomeScreen';
import ProductDetail from '../screens/product/ProductDetail';
import BasketScreen from '../screens/product/BasketScreen';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Home} from '../components/icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const ProductStack = createNativeStackNavigator();

const ProductMainStack = ({navigation}: any) => {
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const items = await AsyncStorage.getItem('cart');
      if (items !== null) {
        setCartItems(JSON.parse(items));
      }
    } catch (error) {
      console.error('Error loading cart items:', error);
    }
  };

  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <ProductStack.Screen
        name="productDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
      <ProductStack.Screen
        name="Basket"
        component={BasketScreen}
        options={{headerShown: false}}
        initialParams={{cartItems}}
      />
    </ProductStack.Navigator>
  );
};

export default ProductMainStack;

const styles = StyleSheet.create({});
