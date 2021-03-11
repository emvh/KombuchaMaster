import React, { Component, useContext } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import BrewForm from '../components/BrewForm.js';
import { AppContext } from '../contexts/AppContext.js'

const AddBrew = (props) => {

  const { brewList, setBrewList } = useContext(AppContext);

  const addToBrewList = (formResponse) => {
    setBrewList(brewList.concat(formResponse));
  }

  return (
    <View style={styles.container}>
      <BrewForm
        navigation={props.navigation}
        addToBrewList={addToBrewList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddBrew;