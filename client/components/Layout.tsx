import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import { ScrollView } from 'react-native'

interface children {
  children: React.ReactNode
}

const Layout = ({ children }: children) => {
  return (
    <>
      <Header />
      <View style={{flex: 1}}>
      {children}
      </View>
    </>
  )
}

export default Layout;