import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
const SigninScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);
  return <View style={styles.container}>
    <NavigationEvents
      onWillFocus={clearErrorMessage}
    />
    <AuthForm
      headerText='Sign In for Tracker'
      errorMessage={state.errorMessage}
      submitButtonText='Sign In'
      onSubmit={signIn}
    />
    <NavLink 
      routeName='Signup'
      text='Dont have an account? Sign Up instead'
    />
  </View>
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;
