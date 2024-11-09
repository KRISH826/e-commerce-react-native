import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from "react-native-vector-icons/AntDesign";

interface CategoryData {
  id: number;
  name: string;
  icon: React.ReactNode; // Use React.ReactNode to type the icon element
}

export const categoriesData: CategoryData[] = [
  {
    id: 1,
    name: 'Fashion',
    icon: <FontAwesome name="shopping-bag" size={24} color="#4B0082" />,
  },
  {
    id: 2,
    name: 'Mobiles',
    icon: <Ionicons name="phone-portrait-outline" size={24} color="#4B0082" />,
  },
  {
    id: 3,
    name: 'Electronics',
    icon: <Ionicons name="laptop-outline" size={24} color="#4B0082" />,
  },
  {
    id: 4,
    name: 'Health',
    icon: <Icon name="heart-outline" size={24} color="#4B0082" />,
  },
  {
    id: 5,
    name: 'Home',
    icon: <FontAwesome name="home" size={24} color="#4B0082" />,
  },
  {
    id: 6,
    name: 'Groceries',
    icon: <Icon name="food-apple-outline" size={24} color="#4B0082" />,
  },
  {
    id: 7,
    name: 'Books',
    icon: <FontAwesome name="book" size={24} color="#4B0082" />,
  },
  {
    id: 8,
    name: 'Automotive',
    icon: <FontAwesome name="car" size={24} color="#4B0082" />,
  },
  {
    id: 9,
    name: 'Sports',
    icon: <Ionicons name="bicycle-outline" size={24} color="#4B0082" />,
  },
  {
    id: 10,
    name: 'Deals',
    icon: <FontAwesome name="tags" size={24} color="#4B0082" />,
  },
];
