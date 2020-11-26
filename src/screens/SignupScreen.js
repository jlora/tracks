import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return <> 
    <Text style={{ fontSize: 48}}>SignUpScreen</Text>
    <Button 
      title='Go to SignIn' 
      onPress={() => navigation.navigate('Signin')}
    />
    <Button 
      title='Go to main Flow' 
      onPress={() => navigation.navigate('mainFlow')}
    />
  </>
};

const styles = StyleSheet.create({});

export default SignupScreen;