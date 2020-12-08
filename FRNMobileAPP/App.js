
import * as React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import accessCamera from './components/Camera';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="Camera"
          component={accessCamera}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

