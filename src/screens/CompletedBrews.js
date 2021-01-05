import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletedBrews = () => {
  return (
    <View style={styles.container}>
      <Text>completed brews</Text>
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

export default CompletedBrews;