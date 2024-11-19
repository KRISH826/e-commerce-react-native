import { View, Text } from 'react-native'
import React from 'react'
import Layout from '@/components/Layout'
import { ScrollView } from 'react-native-gesture-handler'
import CartMain from '@/components/cart/CartMain'

const CartScreen = () => {
  return (
    <Layout>
      <ScrollView>
        <CartMain />
      </ScrollView>
    </Layout>
  )
}

export default CartScreen