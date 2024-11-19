import { View, Text, StyleSheet, TouchableOpacity, Image, GestureResponderEvent } from "react-native";
import React, { useCallback, useState } from "react";
import { Colors } from "@/constants/Color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ConfirmDialogue from "../shared/ConfirmDialogue";


const CartItem = ({ item }: { item: ProductData }) => {
  const [deleteDialogue, setdeleteDialogue] = useState(false);
  const [quantity, setquantity] = useState(1);

  const handleDelete = useCallback(() => {
    setdeleteDialogue(false);
  }, []);

  const openDeleteDialog = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setdeleteDialogue(true);
  };

  const closeDeleteDialog = useCallback(() => {
    setdeleteDialogue(false);
  }, []);

  const decrementQuantity = () => {
    setquantity(prev => Math.max(prev - 1, 1));
  }

  const incrementQuantity = () => {
    setquantity((prev) => prev + 1)
  }

  return (
    <>
     <TouchableOpacity style={styles.CartCard}>
        <View style={styles.CardContent}>
          <View style={styles.CardImage}>
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 65, height: 65, objectFit: "contain" }}
            />
          </View>
          <View style={styles.CardText}>
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: 14, wordWrap: "wrap" }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </View>
            <Text style={{ color: Colors.light.primaryColor, paddingTop: 5 }}>
              ${item.price}
            </Text>
            <View style={styles.QuantityContainer}>
              <TouchableOpacity onPress={decrementQuantity} style={styles.QuantityButton}>
                <Text style={styles.QuantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.QuantityValue}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity} style={styles.QuantityButton}>
                <Text style={styles.QuantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.CardActions}>
          <TouchableOpacity style={styles.favButton}>
            <FontAwesome
              name="heart-o"
              size={22}
              color={Colors.light.primaryColor}
            />
            <Text style={{ color: Colors.light.primaryColor }}>
              Add To Favourites
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={openDeleteDialog}
          >
            <FontAwesome
              name="trash-o"
              size={22}
              color={Colors.light.primaryColor}
            />
            <Text style={{ color: Colors.light.primaryColor }}>Remove</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <ConfirmDialogue
        visibleModal={deleteDialogue}
        onCancel={closeDeleteDialog}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  CartCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    boxShadow: "none",
    width: "100%",
    wordWrap: "wrap",
    flexDirection: "column",
  },
  CardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 10,
  },
  CardImage: {
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    // Shadow for iO
  },
  CardText: {
    flex: 1,
  },
  CardActions: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
  },
  removeButton: {
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    flex: 1,
    borderRightColor: "#ddd",
  },
  favButton: {
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    flex: 1,
    borderRightColor: "#ddd",
    borderRightWidth: 1,
  },
  QuantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  QuantityButton: {
    borderWidth: 1,
    borderColor: Colors.light.primaryColor,
    backgroundColor: Colors.light.lavender,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  QuantityText: {
    fontSize: 18,
    color: Colors.light.primaryColor,
  },
  QuantityValue: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
