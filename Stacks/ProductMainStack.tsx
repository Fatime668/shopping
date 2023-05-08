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
  //AddToCart funksiyasi
  const addToCart = async () => {
    try {
      const response = await axios.get(
        'https://64440b5e466f7c2b4b60625b.mockapi.io/products',
      ); // API-dan məhsul məlumatlarını almaq üçün GET funksiyasi
      const product = response.data; // API-dan gələn məhsul obyekti
      const existingItem = cartItems.find(
        (item: any) => item.id === product.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        setCartItems([...cartItems]);
      } else {
        const newItem = {...product, quantity: 1, totalPrice: product.price};
        const updatedCart = [...cartItems, newItem];
        setCartItems(updatedCart);
      }
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  //TotalPrice
  const calculateTotalPrice = (items: any) => {
    let total = 0;
    items.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  //RemoveBasketData
  const removeFromCart = (productId: any) => {
    const updatedCart = cartItems.filter((item: any) => item.id !== productId);
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
    AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
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
        initialParams={{addToCart}}
      />
      <ProductStack.Screen
        name="Basket"
        component={BasketScreen}
        options={{headerShown: false}}
        initialParams={{cartItems, removeFromCart}}
      />
    </ProductStack.Navigator>
  );
};

export default ProductMainStack;

const styles = StyleSheet.create({});
