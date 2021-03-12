import React, { Component, useContext } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import BrewForm from '../components/BrewForm.js';
import { AppContext } from '../contexts/AppContext.js'

const AddBrew = (props) => {

  const { brewList, setBrewList, postData } = useContext(AppContext);

  const addToBrewList = (formResponse) => postData(formResponse);

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