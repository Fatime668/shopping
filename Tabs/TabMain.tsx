import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductMainStack from '../Stacks/ProductMainStack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AntDesign from 'react-native-vector-icons';
import {Home, Profile, Buy, Heart} from '../components/icons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import BasketScreen from '../screens/product/BasketScreen';
import FavoritesScreen from '../screens/product/FavoritesScreen';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 70,
  },
  tabBarItemStyle: {
    borderRadius: 10,
  },
};
const TabMain = () => {
  const [cartItems, setCartItems] = useState<any>([]);

  return (
    <Tab.Navigator {...{screenOptions}}>
      <Tab.Screen
        name="Products"
        component={ProductMainStack}
        options={({route}: any) => ({
          headerShown: false,
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'productDetail') {
              return {display: 'none'};
            }
            return {
              borderTopWidth: 0,
              height: 70,
            };
          })(route),
          tabBarIcon: ({focused}) => (
            <Home
              fill={focused ? '#5956e9' : '#fff'}
              style={{
                shadowColor: '#5956e9',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({route}: any) => ({
          headerShown: false,
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'productDetail') {
              return {display: 'none'};
            }
            return {
              borderTopWidth: 0,
              height: 70,
            };
          })(route),
          tabBarIcon: ({focused}) => (
            <Profile
              fill={focused ? '#5956e9' : '#fff'}
              style={{
                shadowColor: '#5956e9',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        initialParams={{cartItems}}
        options={({route}: any) => ({
          headerShown: false,
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'productDetail') {
              return {display: 'none'};
            }
            return {
              borderTopWidth: 0,
              height: 70,
            };
          })(route),
          tabBarIcon: ({focused}) => (
            <Buy
              fill={focused ? '#5956e9' : '#fff'}
              style={{
                shadowColor: '#5956e9',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={({route}: any) => ({
          headerShown: false,
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'productDetail') {
              return {display: 'none'};
            }
            return {
              borderTopWidth: 0,
              height: 70,
            };
          })(route),
          tabBarIcon: ({focused}) => (
            <Heart
              fill={focused ? '#5956e9' : '#fff'}
              style={{
                shadowColor: '#5956e9',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabMain;

const styles = StyleSheet.create({});
