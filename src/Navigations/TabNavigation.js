import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Meet from '../Screens/Meet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () => (<AntDesign name='mail' size={25} color="black" />),
        }} />
        <Tab.Screen name="Meet" component={Meet} options={{
          tabBarIcon: () => (<MaterialCommunityIcons name='video-outline' size={30} color="black" />),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation