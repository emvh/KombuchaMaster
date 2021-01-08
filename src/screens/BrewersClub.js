import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BrewersClub = () => {
  return (
    <View style={styles.container}>
      <Text>in da club</Text>
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

export default BrewersClub;