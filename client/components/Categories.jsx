import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { categoriesData } from "../data/CategoriesData";
import { TouchableOpacity } from "react-native";

const Categories = () => {
  return (
    <View style={styles.catgorie_page}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoriesData.map((category) => (
          <View key={category.id} style={styles.category}>
            <TouchableOpacity style={styles.categories}>
              {category.icon}
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  catgorie_page: {
    paddingVertical: 12,
  },
  category: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
