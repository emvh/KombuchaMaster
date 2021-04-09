import React from 'react';
import { StyleSheet } from 'react-native';
import SwipeList from '../components/SwipeList.js';

const CompletedBrews = (props) => {
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