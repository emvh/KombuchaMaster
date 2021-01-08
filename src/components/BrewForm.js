import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class BrewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Name your brew baby" />
        <Text>1st Fermentation</Text>
        <TextInput placeholder="Start date" />
        <TextInput placeholder="End date" />
        <Text>Ingredients</Text>
        <TextInput placeholder="Tea type" /> 
        <TextInput placeholder="Tea measurement" />
        <TextInput placeholder="Water measurement" />
        <TextInput placeholder="Sugar measurement" />
        <TextInput placeholder="Starter tea measurement" />
        <Text>2nd Fermentation</Text>
        <TextInput placeholder="Flavors" />
        <TextInput placeholder="Finish date" />
        <TextInput placeholder="Notes" />
        <TouchableOpacity>
          <Text>Let's Brew!</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default BrewForm;