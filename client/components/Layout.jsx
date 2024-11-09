import { View, Text, ScrollView } from "react-native";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <>
      <View>
        <Header />
        <ScrollView>{children}</ScrollView>
      </View>
    </>
  );
};

export default Layout;
