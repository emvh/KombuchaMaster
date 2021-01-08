import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Current';
  switch (routeName) {
    case 'Current':
      return 'Brews in Progress';
    case 'Completed':
      return 'Brew Archive';
    case 'Club':
      return 'The Brew Club';
  }
}