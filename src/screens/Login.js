import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {

    // console.log('loginstate', this.state);
    const { navigation } = this.props;

    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder='Email'
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder='Password'
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Button
          title="Don't have an account? Sign up"
          onPress={() => navigation.navigate('Signup')}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 200,
  },
})

export default Login;