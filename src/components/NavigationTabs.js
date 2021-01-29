import React, { useLayoutEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import CurrentBrews from '../screens/CurrentBrews.js';
import CompletedBrews from '../screens/CompletedBrews.js';
import BrewClub from '../screens/BrewClub.js';
import { getHeaderTitle } from '../utils/HeaderTitle';

const Tab = createBottomTabNavigator();

const NavigationTabs = ({ navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
      headerRight: (getHeaderTitle(route) === "Brews in Progress") ? () => (
        <Button
          onPress={() => navigation.navigate('Add')}
          title="Add"
          color="#4287f5"
        />
      ) : null,
    })
  }, [navigation, route]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Current"
        component={CurrentBrews}
        options={{ tabBarLabel: "The Current" }}
      />
      <Tab.Screen name="Completed" component={CompletedBrews}
        options={{ tabBarLabel: "The Completed" }}
      />
      <Tab.Screen name="Club" component={BrewClub}
        options={{ tabBarLabel: "The Club" }}
      />
    </Tab.Navigator>
  )
}

export default NavigationTabs;

