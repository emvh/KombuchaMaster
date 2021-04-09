import React from 'react';
import { StyleSheet } from 'react-native';
import SwipeList from '../components/SwipeList.js';

const CurrentBrews = (props) => {
  return (
    <SwipeList
      screen='CurrentBrews'
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

export default CurrentBrews;

