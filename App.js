import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationTabs from './src/components/NavigationBar.js';
import CurrentBrews from './src/screens/CurrentBrews.js';
import CompletedBrews from './src/screens/CompletedBrews.js';
import { getHeaderTitle } from './src/utils/HeaderTitle';
// import LoginScreen from './src/screens/LoginScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NavigationTabs} options={ ({ route }) => ({ headerTitle: getHeaderTitle(route) }) }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
