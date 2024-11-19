import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Color'


type Props = {
    dataText: string | 'No Data Avaliable',
}

const NoData = ({dataText}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dataText}</Text>
    </View>
  )
}

export default NoData;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius:  10,
    },
    text: {
      fontSize: 18
    }
})