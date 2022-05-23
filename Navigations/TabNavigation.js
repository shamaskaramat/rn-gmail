import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Meet from "../src/Screens/Meet"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigation from './StackNavigation';
import Home from '../src/Screens/Home';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Stack" component={StackNavigation} options={{
          tabBarIcon: () => (<AntDesign name='mail' size={25} color="black" />),
        }} />
        {/* <Tab.Screen name="Mail" component={Home} options={{
          tabBarIcon: () => (<AntDesign name='mail' size={25} color="black" />),
        }} /> */}
        <Tab.Screen name="Meet" component={Meet} options={{
          tabBarIcon: () => (<MaterialCommunityIcons name='video-outline' size={30} color="black" />),
        }} />
      </Tab.Navigator>
  )
}

export default TabNavigation