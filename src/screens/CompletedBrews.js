import React from 'react';
import { StyleSheet } from 'react-native';
'react-native-swipe-list-view';
import SwipeList from '../components/SwipeList.js'

const CompletedBrews = (props) => {

  console.log('hi completed brews');

  return (
    <SwipeList
      screen='CompletedBrews'
      navigation={props.navigation}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CompletedBrews;