import React, { Component } from 'react';
import {loginFormCss} from '../../../assets/css/';

import {Text, View, TextInput, Alert} from 'react-native';

import { Button } from 'react-native-elements';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {
    fetch('https://completefarmer-backend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: `${this.state.email}`,
        password: `${this.state.password}`
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        Alert.alert(`Hello ${responseJson.fullname}`);
      });
  }

  onRegisterPress() {}

  render() {
    return (
      <View style={loginFormCss.container}>
        <TextInput
          name="email"
          placeholder="Email"
          placeholderColor="#c4c3cb"
          style={loginFormCss.textInput}
          ref="email"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          name="password"
          placeholder="Password"
          placeholderColor="#c4c3cb"
          style={loginFormCss.textInput}
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={loginFormCss.actionBtnContainer}>
          <Button
            containerViewStyle={{ marginLeft: 5 }}
            buttonStyle={loginFormCss.registerButton}
            onPress={() => this.onRegisterPress()}
            title="REGISTER"
            color="#FFFFFF"
          />
          <Button
            containerViewStyle={{ marginRight: 5 }}
            buttonStyle={loginFormCss.loginButton}
            onPress={() => this.onLoginPress()}
            title="LOGIN"
          />
        </View>
      </View>
    );
  }

}