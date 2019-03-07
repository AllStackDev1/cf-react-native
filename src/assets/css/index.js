import { StyleSheet } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const loginScreenCss = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:-20
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {},
  motor: {
    color: '#FFFFFF',
    marginBottom: 30,
    fontSize: 15,
    opacity: 0.8,
    textAlign: 'center'
  }
});

export const loginFormCss = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 80
  },
  textInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#ffffff',
    margin: 5
  },
  actionBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  loginButton: {
    backgroundColor: '#1F6B36',
    borderRadius: 5,
    height: 45,
    width: 100,
    marginTop: 10,
    elevation: 5
  },
  registerButton: {
    height: 45,
    width: 100,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'transparent'
  }
});