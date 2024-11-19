import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Layout from "@/components/Layout";
import Category from "@/components/home/Category";
import HomeBanner from "@/components/home/HomeBanner";
import Product from "@/components/home/Product";
import { Dialog, Portal } from 'react-native-paper'

const HomeScreen = () => {
  return (
    <Layout>
      <ScrollView>
      <Category />
      <View style={styles.homeBannerView}>
        <HomeBanner />
      </View>
      <View>
        <Product />
      </View>
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeBannerView: {
    height: 175
  }
})
