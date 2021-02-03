import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function displayNavigationIcon(route, focused, color, size) {
  let iconName;
  switch (route.name) {
    case 'Current':
      iconName = focused ? 'ios-list-sharp' : 'ios-list-outline';
      return <Ionicons name={iconName} size={size} color={color} />;
    case 'Completed':
      iconName = focused ? 'ios-archive' : 'ios-archive-outline';
      return <Ionicons name={iconName} size={size} color={color} />;
    case 'Club':
      iconName = focused ? 'ios-search' : 'ios-search-outline';
      return <Ionicons name={iconName} size={size} color={color} />;
  }
}