import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './src/components/NavigationTabs.js';
import CurrentBrews from './src/screens/CurrentBrews.js';
import AddBrew from './src/screens/AddBrew.js';
import CompletedBrews from './src/screens/CompletedBrews.js';
import Login from './src/screens/Login.js';
import Signup from './src/screens/Signup.js';
import { AppContext, AppContextProvider } from './src/contexts/AppContext.js'

const Stack = createStackNavigator();

const App = () => {

  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Navigation">
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
          />
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
   </AppContextProvider>
  );

}

export default App;
