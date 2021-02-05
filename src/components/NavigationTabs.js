import React, { useLayoutEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentBrews from '../screens/CurrentBrews.js';
import CompletedBrews from '../screens/CompletedBrews.js';
import BrewClub from '../screens/BrewClub.js';
import { getHeaderTitle } from '../utils/HeaderTitle';
import { displayNavigationIcon } from '../utils/NavigationIcon';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const NavigationTabs = ({ navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
      headerRight:
      (getHeaderTitle(route) === "Brews in Progress") ? () => (
        <Button
          onPress={() => navigation.navigate('Add')}
          title="Add"
          color="#4287f5"
        />
      ) : null,
    })
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return displayNavigationIcon(route, focused, color, size);
        },
      })}
      tabBarOptions={{
        activeTintColor: '#59cbbd',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentBrews}
        options={{ tabBarLabel: "The Current" }}
      />
      <Tab.Screen name="Completed"
        component={CompletedBrews}
        options={{ tabBarLabel: "The Completed" }}
      />
      <Tab.Screen name="Club"
        component={BrewClub}
        options={{ tabBarLabel: "The Club" }}
      />
    </Tab.Navigator>
  )
}

export default NavigationTabs;