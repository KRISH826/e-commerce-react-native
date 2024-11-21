import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '@/screens/CartScreen';
import CheckOutScreen from '@/screens/CheckOutScreen';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='CheckOut' component={CheckOutScreen} />
    </Stack.Navigator>
  )
}

export default CartStackNavigator