import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "@/constants/Color";
import { Button } from "react-native-paper";

type Props = {
  product: ProductData;
};

const ProductDetails = ({ product }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <View style={styles.button_container}>
        <Button
          icon="cart"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.cartButton}
        >
          Add to Cart
        </Button>
        <Button
          icon="camera"
          mode="contained"
          textColor={Colors.light.primaryColor}
          onPress={() => console.log("Pressed")}
          style={styles.buyButton}
        >
          Buy Now
        </Button>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 20,
  },
  button_container: {
    alignItems: "center",
    gap: 10,
    flexDirection: 'row',
  },
  cartButton: {
    backgroundColor: Colors.light.primaryColor,
    borderRadius: 5,
    width: "50%",
  },
  buyButton: {
    borderRadius: 5,
    flex: 1,
    borderColor: Colors.light.primaryColor,
    borderWidth: 1,
    backgroundColor: "transparent",
    width: "50%",
  },
});
