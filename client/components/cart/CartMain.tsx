import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { productsData } from "@/data/ProductData";
import NoData from "../shared/NoData";
import CartItem from "./CartItem";
import { Colors } from "@/constants/Color";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CartMain = () => {
  const [cartItem, setcartItem] = useState<ProductData[]>(productsData);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cart_section}>
        {cartItem?.length > 0 ? (
          <>
            {cartItem.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <>
            <NoData dataText="No Cart Items AValiable" />
          </>
        )}
      </View>
      {/* card price details */}
      <View style={styles.cart_product_details}>
        <View style={{borderBottomWidth: 1, borderBottomColor: "#ccc", marginBottom: 10, paddingBottom: 8}}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Product Details</Text>
        </View>
        <View style={styles.cart_product_details_price}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Subtotal:</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              ${cartItem.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </Text>
        </View>
        <View style={styles.cart_product_details_price}>
            <Text style={{ fontWeight: "500", fontSize: 16, color: Colors.light.discountColor }}>Platform fee:</Text>
            <Text style={{ fontWeight: "500", fontSize: 16, color: Colors.light.discountColor }}>
              -$10
            </Text>
        </View>
        <View style={styles.cart_product_details_price}>
            <Text style={{ fontWeight: "500", fontSize: 16, color: Colors.light.discountColor }}>Delievery Charges</Text>
            <Text style={{ fontWeight: "500", fontSize: 16, color: Colors.light.discountColor }}>
              Free
            </Text>
        </View>
        <View style={{paddingTop: 10, marginTop: 10, borderTopColor: "#ccc", borderTopWidth: 1, alignItems: "flex-end"}}>
        <Button
          mode="contained"
          textColor="white"
          onPress={() => navigation.navigate('CheckOut',)}
          style={styles.orderButton}
        >
          Place Order
        </Button>
        </View>
      </View>
    </View>
  );
};

export default CartMain;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cart_section: {
    gap: 10,
  },
  cart_product_details: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cart_product_details_price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderButton: {
    backgroundColor: Colors.light.primaryColor,
    borderRadius: 5,
    width: 150
  },
});
