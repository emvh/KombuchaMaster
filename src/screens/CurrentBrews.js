import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentBrews = () => {
  return (
    <View style={styles.container}>
      <Text>hello brews</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CurrentBrews;