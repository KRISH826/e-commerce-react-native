import { Text, ScrollView } from 'react-native'
import React from 'react'
import Layout from '@/components/Layout'
import ProductDetails from '@/components/home/ProductDetails'
import { RouteProp, useRoute } from '@react-navigation/native'


type RootStackParamList = {
    details: { product: ProductData };
};

const ProductDetailsScreen = () => {
    const route = useRoute<RouteProp<RootStackParamList>>();
    const {product} = route.params;
  return (
    <Layout>
        <ScrollView style={{flex: 1, height: "100%"}}>
            <ProductDetails product={product} />
        </ScrollView>
    </Layout>
  )
}

export default ProductDetailsScreen