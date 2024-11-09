import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  const [text, setText] = React.useState("");
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction
        onPress={() => {
          /* handle back action */
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search..."
          mode="outlined"
          style={styles.input}
          underlineColor="transparent"
          outlineColor="transparent"
          value={text}
          onChangeText={(search) => setText(search)}
        />
      </View>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E6E6FA", // Customize header color
    elevation: 4, // Adds shadow on Android
    shadowOpacity: 0.2, // Adds shadow on iOS
  },
  inputContainer: {
    flex: 1, // Make input container take available space
    marginLeft: 0, // Space between BackAction and TextInput
    marginRight: 8, // Space at end of TextInput
  },
  input: {
    height: 40,
    backgroundColor: "#f0f0f0", // Background color for input
    borderRadius: 8, // Rounded corners
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
