import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return <SafeAreaView>
    <Text style={{ fontSize: 48}}>AccountScreen</Text>
    <Spacer>
      <Button title='Sign Out' onPress={signOut} />
    </Spacer>
  </SafeAreaView>
};

const styles = StyleSheet.create({});

export default AccountScreen;
