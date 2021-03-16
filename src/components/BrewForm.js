import React, { useState, useEffect } from 'react';
import { StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Container, Form, Icon, Item, Input, Label, ListItem, Picker, Text, Textarea } from 'native-base';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const BrewForm = (props) => {

  console.log('hi brew form');

  const [brewName, setBrewName] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startDateISO, setStartDateISO] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [brewDays, setBrewDays] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [teaType, setTeaType] = useState(null);
  const [teaValue, setTeaValue] = useState(null);
  const [waterValue, setWaterValue] = useState(null);
  const [sugarValue, setSugarValue] = useState(null);
  const [starterTeaValue, setStarterTeaValue] = useState(null);
  const [notes, setNotes] = useState(null);
  const [reminderEnabled, setReminder] = useState(false);

  const brewNameInput = (brewName) => {
    setBrewName(brewName);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setStartDateISO(date);
    let dateToString = date.toString().substr(4, 11);
    setStartDate(dateToString);
    hideDatePicker();
  };

  const onBrewDaysValueChange = (value: string) => {
    setBrewDays(value);
  };

  const toggleSwitch = () => setReminder(previousState => !previousState);

  useEffect(() => {
    if ((startDateISO || props.startDateISO) && (brewDays || props.brewDays)) {
      let end = new Date(startDateISO || props.startDateISO);
      end.setDate(end.getDate() + Number(brewDays || props.brewDays));
      end = end.toString().substr(4, 11);
      setEndDate(end);
    }
  }, [startDate, brewDays, endDate]);

  const onTeaTypeChange = (value: string) => {
    setTeaType(value);
  };

  const teaInput = (teaValue) => {
    setTeaValue(teaValue);
  };

  const waterInput = (waterValue) => {
    setWaterValue(waterValue);
  };

  const sugarInput = (sugarValue) => {
    setSugarValue(sugarValue);
  };

  const starterTeaInput = (starterTeaValue) => {
    setStarterTeaValue(starterTeaValue);
  };

  const notesInput = (notes) => {
    setNote(notes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const brew = {
      _id: props._id,
      brewName: brewName || props.brewName,
      startDateISO: startDateISO || props.startDateISO,
      startDate: startDate || props.startDate,
      brewDays: brewDays || props.brewDays,
      endDate: endDate || props.endDate,
      reminderEnabled: reminderEnabled || props.reminderEnabled,
      teaType: teaType || props.teaType,
      teaValue: teaValue || props.teaValue,
      waterValue: waterValue || props.waterValue,
      sugarValue: sugarValue || props.sugarValue,
      starterTeaValue: starterTeaValue || props.starterTeaValue,
      notes: notes || props.notes
    };
    console.log('brew', brew);
    props.addOrUpdateBrew(brew);
    props.navigation.navigate('Navigation');
  };

  return (
    <Container style={styles.container}>

      <Form>

        <ListItem itemDivider/>

        <Item fixedLabel>
          <Label>Brew Name</Label>
          <Input
            value={brewName || props.brewName}
            onChangeText={brewNameInput}
          />
        </Item>

        <ListItem itemDivider/>

        <ListItem itemDivider>
          <Text>1st Fermentation</Text>
        </ListItem>

        <Item fixedLabel onPress={showDatePicker} >
          <Label>Start Date</Label>
          <Text style={styles.date}>{startDate || props.startDate}</Text>
        </Item>

        <Item fixedLabel>
        <Label>Brewing Days</Label>
          <Item picker style={styles.brewDaysPicker}>
            <Picker
              mode="dropdown"
              placeholder="# Days"
              placeholderStyle={{ color: "#bfc6ea" }}
              selectedValue={brewDays || props.brewDays}
              onValueChange={onBrewDaysValueChange.bind(null)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
            </Picker>
          </Item>
        </Item>

        <Item fixedLabel>
          <Label>End Date</Label>
          <Text style={styles.date}>{endDate || props.endDate}</Text>
        </Item>

        <Item fixedLabel style={styles.reminder}>
          <Label>Remind Me</Label>
          <Switch
            onValueChange={toggleSwitch}
            value={reminderEnabled || props.reminderEnabled}
            style={styles.switch}
          />
        </Item>

        <ListItem itemDivider/>
        <ListItem itemDivider>
          <Text>Ingredients</Text>
        </ListItem>

        <Item fixedLabel>
          <Label>Tea</Label>
          <Input
            style={styles.teaInput}
            placeholderTextColor="#bfc6ea"
            placeholder='#'
            value={teaValue || props.teaValue}
            onChangeText={teaInput}
          />
          <Text style={styles.teaMeasurement}>Tbsp/Teabags</Text>
          <Item picker style={styles.teaType}>
            <Picker
              mode="dropdown"
              placeholder="Tea Type"
              placeholderStyle={{ color: "#bfc6ea" }}
              selectedValue={teaType || props.teaType}
              onValueChange={onTeaTypeChange.bind(null)}
            >
              <Picker.Item label="Black" value="Black" />
              <Picker.Item label="Green" value="Green" />
              <Picker.Item label="Oolong" value="Ooolong" />
              <Picker.Item label="White" value="White" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </Item>
        </Item>

        <Item fixedLabel style={styles.itemField}>
          <Label style={styles.ingredientLabel}>Water</Label>
          <Input
            style={styles.inputCups}
            placeholderTextColor="#bfc6ea"
            placeholder='#'
            value={waterValue || props.waterValue}
            onChangeText={waterInput}
          />
          <Text style={styles.cupsText}>Cups</Text>
        </Item>
        <Item fixedLabel>
          <Label style={styles.ingredientLabel}>Sugar</Label>
          <Input
            style={styles.inputCups}
            placeholderTextColor="#bfc6ea"
            placeholder='#'
            value={sugarValue || props.sugarValue}
            onChangeText={sugarInput}
          />
          <Text style={styles.cupsText}>Cups</Text>
        </Item>
        <Item fixedLabel style={styles.itemField}>
          <Label style={styles.ingredientLabel}>Starter Tea</Label>
          <Input
            style={styles.inputCups}
            placeholderTextColor="#bfc6ea"
            placeholder='#'
            value={starterTeaValue || props.starterTeaValue}
            onChangeText={starterTeaInput}
          />
          <Text style={styles.cupsText}>Cups</Text>
        </Item>

        <ListItem itemDivider/>
        <ListItem itemDivider>
          <Text>Notes</Text>
        </ListItem>

        <Textarea
          rowSpan={3}
          placeholder="Add my brewing notes"
          value={notes || props.notes}
          onChangeText={setNotes}
        />
        <ListItem itemDivider/>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          {(props.brewName) && <Text style={{ color: "white" }}>Update Brew!</Text>}
          {(!props.brewName) && <Text style={{ color: "white" }}>Let's Brew!</Text>}
        </TouchableOpacity>

        <ListItem itemDivider/>
        <ListItem itemDivider/>
        <ListItem itemDivider/>
        <ListItem itemDivider/>

      </Form>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    paddingTop: 40,
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
  reminder: {
    height: 50
  },
  switch: {
    flex: 2
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