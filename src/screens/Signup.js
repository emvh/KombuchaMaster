import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Firebase from '../firebase/config.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.handleSignup = this.handleSignup.bind(this);
  }
  handleSignup = () => {
    const { email, password } = this.state
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Navigation'))
      .catch((error) => console.log(error))
  }
  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          value={this.state.firstName}
          onChangeText={firstName => this.setState({ firstName })}
          placeholder='First Name'
        />
        <TextInput
          style={styles.input}
          value={this.state.lastName}
          onChangeText={lastName => this.setState({ lastName })}
          placeholder='Last Name'
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder='Email'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
          <Text>Signup</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 10,
      alignItems: 'center',
      backgroundColor: '#59cbbd',
      borderColor: '#59cbbd',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
  },
})

export default Signup;