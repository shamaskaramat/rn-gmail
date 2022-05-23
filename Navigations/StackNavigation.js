
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/Screens/Home';
import Meet from '../src/Screens/Meet';



const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home" screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Meet" component={Meet} />
      </Stack.Navigator>
      </NavigationContainer>

  );
}

export default StackNavigation;