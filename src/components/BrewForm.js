import React, { Component, useState, useCallback, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Container, Header, Content, Form, Icon, Item, Input, Label, Picker, Textarea } from 'native-base';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getBrewDays } from '../utils/GetBrewDays.js'

const BrewForm = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState();
  const [formDate, setFormDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selected2, setSelect] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    // console.warn("A date has been picked: ", date);
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log('test date', date)
    setStartDate(date);
    let dateToString = date.toString().substr(4, 12);
    setFormDate(dateToString);
    hideDatePicker();
  };

  const onValueChange2 = (value: string) => {
    setSelect(value);
  };

  const addDays = (startDate, days) => {
    let result = new Date(startDate);
    result.setDate(result.getDate() + days);
    result = result.toString().substr(4, 12)
    return result;
  }

  useEffect(() => {
    if (formDate && selected2) {
      const days = getBrewDays(selected2);
      console.log('variables', startDate, days)
      const end = addDays(startDate, days);
      setEndDate(end);
    }
  })

  return (
      <Container>
        <Form>

          <Item fixedLabel>
            <Label>Brew Name</Label>
            {/* <Text>{formDate}</Text> */}
            <Input />
          </Item>

          <Text>1st Fermentation</Text>

          <Item fixedLabel onPress={showDatePicker}>
            <Label>Start Date</Label>
            {/* <Input>{formDate}</Input> */}
            <Text>{formDate}</Text>
          </Item>

          <Item fixedLabel>
          <Label>Brewing Days</Label>
            <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Select # days"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={selected2}
                  onValueChange={onValueChange2.bind(null)}
                >
                  <Picker.Item label="1" value="key0" />
                  <Picker.Item label="2" value="key1" />
                  <Picker.Item label="3" value="key2" />
                  <Picker.Item label="4" value="key3" />
                  <Picker.Item label="5" value="key4" />
                </Picker>
              </Item>
          </Item>

          <Item fixedLabel >
            <Label>End Date</Label>
            <Text>{endDate}</Text>
          </Item>

          <Text>Ingredients</Text>
          <Text>2nd Fermentation</Text>

          <Item fixedLabel>
            <Label>Tea</Label>
            <Input/><Text>Tbsp/Teabags                </Text>
            <Item picker>
              <Picker
                mode="dropdown"
                // iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Tea Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selected2}
                onValueChange={onValueChange2.bind(null)}
              >
                <Picker.Item label="Black" value="key0" />
                <Picker.Item label="Green" value="key1" />
                <Picker.Item label="Oolong" value="key2" />
                <Picker.Item label="White" value="key3" />
                <Picker.Item label="Other" value="key4" />
              </Picker>
            </Item>
          </Item>

          <Item fixedLabel>
            <Label>Water</Label>
            <Input /><Text>Cups</Text>
          </Item>
          <Item fixedLabel>
            <Label>Sugar</Label>
            <Input /><Text>Cups</Text>
          </Item>
          <Item fixedLabel>
            <Label>Starter Tea</Label>
            <Input /><Text>Cups</Text>
          </Item>

          <Item fixedLabel>
            <Label>Notes</Label>
            <Input multiline={true}
            // numberOfLines={1}
            style={{height: 100}}
            />
          </Item>

          <TouchableOpacity style={styles.button}>
            <Text>Let's Brew!</Text>
          </TouchableOpacity>

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

export default BrewForm;

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30
  }
});


