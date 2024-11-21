import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '@/screens/CartScreen';
import CheckOutScreen from '@/screens/CheckOutScreen';
import HomeScreen from '@/screens/HomeScreen';
import ProductDetailsScreen from '@/screens/ProductDetailsScreen';
import LoginScreen from '@/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }} initialRouteName='You'>
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='CheckOut' component={CheckOutScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='details' component={ProductDetailsScreen} />
        <Stack.Screen name='You' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator