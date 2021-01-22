import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BrewForm from '../components/BrewForm.js';

const AddBrew = () => {
  return (
    <View style={styles.container}>
      {/* <Text>add brew here</Text> */}
      <BrewForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default AddBrew;