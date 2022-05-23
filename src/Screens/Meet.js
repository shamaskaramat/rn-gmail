import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
const Meet = () => {
  return (
    <View>
     <StatusBar backgroundColor="lightgray" barStyle="light-content" />
    <Header/>
    <Text>MEET</Text>
    </View>
  )
}

export default Meet

const styles = StyleSheet.create({})