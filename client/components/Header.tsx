import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { Colors } from "@/constants/Color";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleBackPress = () => {
    // Prevent back action on Home screen
    if (route.name !== "Home") {
      navigation.goBack();
    }
  };
  return (
    <Appbar.Header style={styles.header}>
      {route.name !== "Home" && (
        <Appbar.BackAction
          onPress={handleBackPress}
          style={{ padding: 0, margin: 0}}
          color={Colors.light.primaryColor}
        />
      )}
      <TextInput
        placeholder="Search Products"
        style={styles.searchInput}
        placeholderTextColor={Colors.light.primaryColor}
      />
      {route.name !== "Cart" && (
        <Appbar.Action
          icon="cart"
          style={{ padding: 0, margin: 0 }}
          color={Colors.light.primaryColor}
          onPress={() => {}}
        />
      )}
    </Appbar.Header>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
    backgroundColor: Colors.light.lavender,
  },
  searchInput: {
    flex: 1,
    backgroundColor: Colors.light.background,
    color: Colors.light.primaryColor,
    borderRadius: 3,
    height: 35,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
});
