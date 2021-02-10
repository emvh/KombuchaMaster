import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './src/components/NavigationTabs.js';
import CurrentBrews from './src/screens/CurrentBrews.js';
import AddBrew from './src/screens/AddBrew.js';
import CompletedBrews from './src/screens/CompletedBrews.js';

import { STREAM_API_KEY } from "@env"

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation">
        <Stack.Screen
          name="Navigation"
          component={NavigationTabs}
        />
        <Stack.Screen
          name="Add"
          component={AddBrew}
          options={{
            headerTitle: "Add Brew",
            headerBackTitle: "Back"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
