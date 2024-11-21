import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/screens/LoginScreen";
import RegisterScreen from "@/screens/RegisterScreen";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = ({setAuthenticated}: {setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <AuthStack.Screen name="Login" component={LoginScreen} initialParams={{setAuthenticated}} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
