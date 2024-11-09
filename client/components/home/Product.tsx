import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { productsData } from "@/data/ProductData";
import ProductCard from "./ProductCard";

const Product = () => {
  const renderItem = ({ item }: { item: ProductData }) => {
    return <ProductCard product={item} />; // Pass the item as a prop to ProductCard
  };
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={productsData} // Your product data
        renderItem={renderItem} // Use the updated renderItem function
        keyExtractor={(item) => item.id.toString()} // Use id as the key
        numColumns={2} // Set the number of columns to 2
        columnWrapperStyle={styles.columnWrapper} // Optional: for styling the space between columns
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 8
  },
  columnWrapper: {
    justifyContent: "space-between", // Space between the columns
  },
});
