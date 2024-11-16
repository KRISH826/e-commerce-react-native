import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from './HomeStackNavigator';
import LoginScreen from '@/screens/LoginScreen';
import { Colors } from '@/constants/Color';
import Icon from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string | any;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "You") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Cart") {
                iconName = focused ? "cart" : "cart-outline";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.light.primaryColor,
          })}
        >
          <Tab.Screen name="Home" component={HomeStackNavigator} />
          <Tab.Screen name="You" component={LoginScreen} />
          <Tab.Screen
            name="Cart"
            component={LoginScreen}
            options={{
              tabBarBadge: 31,
              tabBarBadgeStyle: {
                backgroundColor: Colors.light.lavender,
                color: Colors.light.primaryColor,
              },
            }}
          />
        </Tab.Navigator>
  )
}

export default TabNavigator