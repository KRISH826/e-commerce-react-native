import { categoriesData } from "@/data/CategoryData";
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const Category = () => {
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoriesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            {item.icon}
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    paddingVertical: 12
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 7
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Category;
