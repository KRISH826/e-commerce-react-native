import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import Layout from "../components/Layout";
import Categories from "../components/Categories";
import HomeBanner from "../components/HomeBanner";

const HomeScreen = () => {
  return (
      <View>
        <Layout>
            <Categories />
            <HomeBanner/>
            <Text>HomeScreen</Text>
            </Layout>
      </View>
  );
};

export default HomeScreen;
