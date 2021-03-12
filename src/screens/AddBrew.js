import React, { Component, useContext } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import BrewForm from '../components/BrewForm.js';
import { AppContext } from '../contexts/AppContext.js'

const AddBrew = (props) => {

  const { brewList, setBrewList, updateList } = useContext(AppContext);

  const addToBrewList = (formResponse) => {
    axios({
      url: 'http://127.0.0.1:3000/api/brews',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: formResponse,
    })
      .then(() => updateList())
      .catch(error => console.log(error))
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