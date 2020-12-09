
import * as React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import accessCamera from './components/Camera';
import accessMapView from './components/MapView';
import accessLocation from './components/Location'


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="Camera"
          component={accessCamera}
        />

      <Stack.Screen
          name="MapView"
          component={accessMapView}
        />

      <Stack.Screen
          name="LocationView"
          component={accessLocation}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

