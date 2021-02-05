import React, { Component, useState, useCallback, useEffect } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { Container, Header, Content, Form, Icon, Item, Input, Label, ListItem, Picker, Separator, Text, Textarea } from 'native-base';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getBrewDays } from '../utils/GetBrewDays.js'

const BrewForm = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState();
  const [formDate, setFormDate] = useState();
  const [endDate, setEndDate] = useState();
  const [brewDays, setBrewDays] = useState();
  const [tea, setTeaType] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setStartDate(date);
    let dateToString = date.toString().substr(4, 12);
    setFormDate(dateToString);
    hideDatePicker();
  };

  const onBrewDaysValueChange = (value: string) => {
    setBrewDays(value);
  };

  const onTeaValueChange = (value: string) => {
    setTeaType(value);
  };

  const addDays = (startDate, days) => {
    let result = new Date(startDate);
    result.setDate(result.getDate() + days);
    result = result.toString().substr(4, 12)
    return result;
  }

  useEffect(() => {
    if (formDate && brewDays) {
      const days = getBrewDays(brewDays);
      const end = addDays(startDate, days);
      setEndDate(end);
    }
  })

  return (
      <Container style={styles.container}>

        <Form>
          <ListItem itemDivider/>

          <Item fixedLabel>
            <Label>Brew Name</Label>
            <Input />
          </Item>

          <ListItem itemDivider/>

          <ListItem itemDivider>
            <Text>1st Fermentation</Text>
          </ListItem>

          <Item fixedLabel onPress={showDatePicker} >
            <Label>Start Date</Label>
            <Text style={styles.date}>{formDate}</Text>
          </Item>

          <Item fixedLabel>
          <Label>Brewing Days</Label>
            <Item picker style={styles.brewDaysPicker}>
                <Picker
                  mode="dropdown"
                  placeholder="# Days"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  selectedValue={brewDays}
                  onValueChange={onBrewDaysValueChange.bind(null)}
                >
                  <Picker.Item label="1" value="key0" />
                  <Picker.Item label="2" value="key1" />
                  <Picker.Item label="3" value="key2" />
                  <Picker.Item label="4" value="key3" />
                  <Picker.Item label="5" value="key4" />
                </Picker>
              </Item>
          </Item>

          <Item fixedLabel>
            <Label>End Date</Label>
            <Text style={styles.date}>{endDate}</Text>
          </Item>

          <ListItem itemDivider/>
          <ListItem itemDivider>
            <Text>Ingredients</Text>
          </ListItem>

            <Item fixedLabel>
              <Label>Tea</Label>
              <Input style={styles.teaInput} placeholderTextColor="#bfc6ea" placeholder='#'></Input>
              <Text style={styles.teaMeasurement}>Tbsp/Teabags</Text>
              <Item picker style={styles.teaType}>
                <Picker
                  mode="dropdown"
                  style={{ width: undefined }}
                  placeholder="Tea Type"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={tea}
                  onValueChange={onTeaValueChange.bind(null)}
                >
                  <Picker.Item label="Black" value="key0" />
                  <Picker.Item label="Green" value="key1" />
                  <Picker.Item label="Oolong" value="key2" />
                  <Picker.Item label="White" value="key3" />
                  <Picker.Item label="Other" value="key4" />
                </Picker>
              </Item>
            </Item>

          <Item fixedLabel style={styles.itemField}>
            <Label style={styles.ingredientLabel}>Water</Label>
            <Input style={styles.inputCups} placeholderTextColor="#bfc6ea" placeholder='#'/>
            <Text style={styles.cupsText}>Cups</Text>
          </Item>
          <Item fixedLabel>
            <Label style={styles.ingredientLabel}>Sugar</Label>
            <Input style={styles.inputCups} placeholderTextColor="#bfc6ea" placeholder='#'/>
            <Text style={styles.cupsText}>Cups</Text>
          </Item>
          <Item fixedLabel style={styles.itemField}>
            <Label style={styles.ingredientLabel}>Starter Tea</Label>
            <Input style={styles.inputCups} placeholderTextColor="#bfc6ea" placeholder='#'/>
            <Text style={styles.cupsText}>Cups</Text>
          </Item>

          <ListItem itemDivider/>
          <ListItem itemDivider>
            <Text>Notes</Text>
          </ListItem>

          <Textarea rowSpan={3} placeholder="Add brew notes" />

          <ListItem itemDivider/>

          <TouchableOpacity style={styles.button}>
            <Text>Let's Brew!</Text>
          </TouchableOpacity>

          <ListItem itemDivider/>
          <ListItem itemDivider/>
          <ListItem itemDivider/>
          <ListItem itemDivider/>

        </Form>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

      </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
  },
  date: {
    flex: 2,
    fontSize: 17,
    height: 50,
    paddingTop: 15,
  },
  brewDaysPicker: {
    flex: 2.3,
    fontSize: 17,
    borderBottomWidth: 0.1,
  },
  teaInput: {
    marginLeft: 90,
    flex: 1,
  },
  teaMeasurement: {
    flex: 3.3,
    fontSize: 17
  },
  teaType: {
    borderBottomWidth: 0,
  },
  ingredientLabel: {
    flex: 2,
    width: 100,
  },
  inputCups: {
    marginLeft: 30,
    flex: 0.8,
  },
  cupsText: {
    fontSize: 17,
    flex: 1.9,
    paddingRight: 120
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
  },
});

export default BrewForm;