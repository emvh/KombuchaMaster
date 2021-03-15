import React, { Component, useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import BrewForm from '../components/BrewForm.js';
import { AppContext } from '../contexts/AppContext.js';

const AddBrew = (props) => {

  console.log('hi add brew');

  const { brewList, selectedBrew, getData, postData, updateData } = useContext(AppContext);

  const addBrew = (formResponse) => postData(formResponse);

  const updateBrew = (formResponse) => updateData(formResponse)

  if (props.route.params && props.route.params.task === 'update') {
    useEffect(() => {
      getData(props.route.params._id);
    }, []);
    if (!selectedBrew) {
      return null;
    } else {
      const {
        brewName,
        startDate,
        brewDays,
        endDate,
        reminderEnabled,
        teaType,
        teaValue,
        waterValue,
        sugarValue,
        starterTeaValue,
        notes
      } = selectedBrew;
      return (
        <View style={styles.container}>
          <BrewForm
            navigation={props.navigation}
            brewName={brewName}
            startDate={startDate}
            brewDays={brewDays}
            endDate={endDate}
            reminderEnabled={reminderEnabled}
            teaType={teaType}
            teaValue={teaValue}
            waterValue={waterValue}
            sugarValue={sugarValue}
            starterTeaValue={starterTeaValue}
            notes={notes}
            navigation={props.navigation}
            addOrUpdateBrew={updateBrew}
          />
        </View>
      );
    }

  } else {
    return (
      <View style={styles.container}>
        <BrewForm
          navigation={props.navigation}
          addOrUpdateBrew={addBrew}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddBrew;