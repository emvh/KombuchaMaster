import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentBrews from '../screens/CurrentBrews.js';
import CompletedBrews from '../screens/CompletedBrews.js';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Current" component={CurrentBrews} options={{ tabBarLabel: "Current" }} />
      <Tab.Screen name="Completed" component={CompletedBrews} options={{ tabBarLabel: "Completed" }} />
    </Tab.Navigator>
  )
}



export default NavigationTabs;

