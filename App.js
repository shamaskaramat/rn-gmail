import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/Navigations/DrawerNavigation';
import TabNavigation from './Navigations/TabNavigation';

export default function App() {
  return (
    <DrawerNavigation/>
  )
}

const styles = StyleSheet.create({})