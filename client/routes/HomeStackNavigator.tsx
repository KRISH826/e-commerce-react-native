import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '@/screens/HomeScreen';
import ProductDetailsScreen from '@/screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='details' component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator