import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Color";
import { useNavigation, useRoute } from "@react-navigation/native";

const width = Dimensions.get('window').width;

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { setAuthenticated } = route.params as {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const handleLogin = () => {
    setAuthenticated(false);
    navigation.navigate("Home" as never);
  }
  return (
    <SafeAreaView style={styles.auth_container}>
      <View style={{position: "relative"}}>
        <View
          style={{ paddingHorizontal: 20, paddingTop: 30, paddingBottom: 30 }}
        >
          <Text style={styles.main_header}>Welcome Back!</Text>
          <Text>Sign in to your account</Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <TextInput
            placeholder="email or user name"
            placeholderTextColor={"#000"}
            style={styles.login_input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#000"}
            style={styles.login_input}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={{ fontSize: 17, color: "#fff" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text>
            Don't have an account?{" "}
            <Text onPress={() =>navigation.navigate("Register" as never)} style={{ color: Colors.light.primaryColor }}>Sign Up</Text>
          </Text>
        </View>
      </View>
      <Image
        source={require("../assets/curve.png")}
        style={styles.LoginImage}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  auth_container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  main_header: {
    fontSize: 36,
    fontWeight: "bold",
  },
  login_input: {
    height: 60,
    padding: 15,
    backgroundColor: "#F4F5F4",
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: Colors.light.primaryColor,
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  LoginImage: {
    width: width,
    height: 150,
    position: "absolute",
    bottom: -10,
    objectFit: "contain"
  }
});
