import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Forms from './../Forms/Forms';
import t from 'tcomb-form-native';

var LoginForm = t.form.Form;

const LoginFields = t.struct({
  email: t.String,
  password: t.String,
});

class Login extends Component {

  state = {
    submitted: false
  }

  handleSubmit = (e) => {
    const value = this._form.getValue();
    console.log('value: ', value);
    e.preventDefault();
    if (value !== null) {
      this.setState({
        submitted: true
      });
    }
  }

  render() {
    if (this.state.submitted) {
      return <Forms />;
    } else {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Bienvenido!</Text>
          <LoginForm
            type={LoginFields}
            ref={c => this._form = c} />

          <Button
            title='Login'
            style={styles.placeButton}
            onPress={this.handleSubmit} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  placeButton: {
    width: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  }
});

export default Login;
