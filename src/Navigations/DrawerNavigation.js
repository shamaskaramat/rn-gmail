import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Meet from '../Screens/Meet';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon: () => (<MaterialIcons name='all-inbox' size={25} color="black" />),
        }} />
        <Drawer.Screen name="Meet" component={Meet} options={{
          drawerIcon: () => (<MaterialCommunityIcons name='inbox' size={25} color="black" />),
        }} />
        <Drawer.Screen name="Promotions" component={Meet} options={{
          drawerIcon: () => (<AntDesign name='tago' size={25} color="black" />),
        }} />
        <Drawer.Screen name="Starred" component={Meet} options={{
          drawerIcon: () => (<Entypo name='star-outlined' size={25} color="black" />),
        }} />
        <Drawer.Screen name="Snoozed" component={Meet} options={{
          drawerIcon: () => (<Feather name='clock' size={25} color="black" />),
        }} />
          <Drawer.Screen name="Important" component={Meet} options={{
          drawerIcon: () => (<MaterialIcons name='label-important-outline' size={25} color="black" />),
        }} />
         <Drawer.Screen name="Send" component={Meet} options={{
          drawerIcon: () => (<Ionicons name='md-send-outline' size={25} color="black" />),
        }} />
         <Drawer.Screen name="Scheduled" component={Meet} options={{
          drawerIcon: () => (<MaterialCommunityIcons name='send-clock-outline' size={25} color="black" />),
        }} />
          <Drawer.Screen name="Outbox" component={Meet} options={{
          drawerIcon: () => (<MaterialCommunityIcons name='outbox' size={25} color="black" />),
        }} />
         <Drawer.Screen name="All mail" component={Meet} options={{
          drawerIcon: () => (<MaterialCommunityIcons name='email-multiple-outline' size={25} color="black" />),
        }} />
          <Drawer.Screen name="Spam" component={Meet} options={{
          drawerIcon: () => (<MaterialCommunityIcons name='information-outline' size={25} color="black" />),
        }} />
           <Drawer.Screen name="Trash" component={Meet} options={{
          drawerIcon: () => (<Feather name='trash-2' size={25} color="black" />),
        }} />
        <Drawer.Screen name="Calender" component={Meet} options={{
          drawerIcon: () => (<Entypo name='calendar' size={25} color="black" />),
        }} />
          <Drawer.Screen name="Contacts" component={Meet} options={{
          drawerIcon: () => (<MaterialCommunityIcons name='account-circle-outline' size={25} color="black" />),
        }} />
          <Drawer.Screen name="Setting" component={Meet} options={{
          drawerIcon: () => (<Feather name='settings' size={25} color="black" />),
        }} />
         <Drawer.Screen name="Help & feedback" component={Meet} options={{
          drawerIcon: () => (<Feather name='help-circle' size={25} color="black" />),
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}