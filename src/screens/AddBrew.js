import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import BrewForm from '../components/BrewForm.js';

class AddBrew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brews: [],
    };
    this.addToBrewList = this.addToBrewList.bind(this);
  }

  addToBrewList(brew) {
    console.log('addbrewpage', brew)
    axios({
      url: 'http://127.0.0.1:3000/api/brews',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: brew,
    })
      .then(() => console.log('added brew'))
      .catch(error => console.log(error))
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BrewForm
          navigation={navigation}
          addToBrewList={this.addToBrewList}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddBrew;