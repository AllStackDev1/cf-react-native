import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Keyboard,
  // Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native';
import { loginScreenCss } from '../../assets/css/';
import LoginForm from '../../components/forms/login/'

// eslint-disable-next-line react/prefer-stateless-function
export default class LoginScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/login-screen.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <KeyboardAvoidingView style={loginScreenCss.container} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
              <View style={loginScreenCss.logoContainer}>
                <Image
                  style={loginScreenCss.logo}
                  source={require('../../assets/images/logo.png')}
                  alt="Complete Farmer"
                />
                <Text style={loginScreenCss.motor}>Farming Made Easy</Text>
              </View>
              <LoginForm />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
