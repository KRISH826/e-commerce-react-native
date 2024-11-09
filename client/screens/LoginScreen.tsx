import { View, Text } from 'react-native'
import React from 'react'
import Layout from '@/components/Layout'
import { ScrollView } from 'react-native'
import Category from '@/components/home/Category'

const LoginScreen = () => {
  return (
    <Layout>
      <ScrollView>
      <Category />
      </ScrollView>
    </Layout>
  )
}

export default LoginScreen