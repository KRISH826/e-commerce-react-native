import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

interface product {
  product: ProductData;
}

const ProductCard = ({ product }: product) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name.slice(0, 14) + "..."}</Text>
      <Text style={styles.description}>{product.description.slice(0, 40) + "..."}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Button
        mode="contained"
        style={styles.butonstyle}
        onPress={() => console.log("Pressed")}
      >
        Add to cart
      </Button>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: "48%", // Adjust width to fit 2 items per row
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B0082",
  },
  butonstyle: {
    borderRadius: 5,
    marginTop: 8,
  }
});
