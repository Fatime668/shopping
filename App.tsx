import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductMainStack from './Stacks/ProductMainStack';
import ProfileScreen from './screens/profile/ProfileScreen';
import TabMain from './Tabs/TabMain';

const App = () => {
  return (
    <NavigationContainer>
      <SplashStack />
    </NavigationContainer>
  );
};
export default App;
//Splash
const SplashScreenStack = createNativeStackNavigator();

const SplashStack = () => {
  return (
    <SplashScreenStack.Navigator>
      <SplashScreenStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <SplashScreenStack.Screen
        name="Tabs"
        component={TabMain}
        options={{headerShown: false}}
      />
    </SplashScreenStack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({});
