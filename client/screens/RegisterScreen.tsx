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
  import { useNavigation } from "@react-navigation/native";
  
  const width = Dimensions.get('window').width;
  
  const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.auth_container}>
        <View style={{position: "relative"}}>
          <View
            style={{ paddingHorizontal: 20, paddingTop: 30, paddingBottom: 30 }}
          >
            <Text style={styles.main_header}>Sign Up</Text>
            <Text>Create an account so you can order you favourite products easily and quickly</Text>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={"#000"}
              style={styles.login_input}
            />
            <TextInput
              placeholder="User Name"
              placeholderTextColor={"#000"}
              style={styles.login_input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#000"}
              style={styles.login_input}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{ fontSize: 17, color: "#fff" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text>
              Already have an account?
              <Text onPress={() =>navigation.navigate("Login" as never)} style={{ color: Colors.light.primaryColor }}> Log In</Text>
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
  
  export default RegisterScreen;
  
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
  