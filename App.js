import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationTabs from './src/components/NavigationBar.js';
import HomeScreen from './src/screens/HomeScreen.js';
import AddBrew from './src/screens/AddBrew.js';
import CurrentBrews from './src/screens/CurrentBrews.js';
import CompletedBrews from './src/screens/CompletedBrews.js';
import { getHeaderTitle } from './src/utils/HeaderTitle';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Current">
        {/* <Stack.Screen name="Home" component={NavigationTabs} options={ ({ route }) => ({
          headerTitle: getHeaderTitle(route)}) } /> */}
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerTitle: "Welcome Brew Master!"
          }}
        />
        <Stack.Screen name="Current" component={CurrentBrews}
          options={{
            headerTitle: "Brews in Progress"
          }}
        />
        <Stack.Screen name="Add" component={AddBrew}
          options={{
            headerTitle: "Add Brew"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
