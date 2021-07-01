import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CustomLoginTextInput from '../components/CustomLoginTextInput';
import LoginHeader from '../components/LoginHeader';
import {RootStackParmsList} from '../data/params';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'SIGNUPTWO'>;
}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  return (
    <View style={styles.container}>
      <LoginHeader />
      <View style={styles.contentStyle}>
        <CustomLoginTextInput placeholder="Email or Phone Number" />
        <CustomLoginTextInput placeholder="Password" />
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Sign In</Text>
        </View>
        <Text style={{color: '#a9a9a9', fontSize: 16, marginBottom: 40}}>
          Need Help?
        </Text>
        <Pressable onPress={() => props.navigation.navigate('SIGNUPONE')}>
          <Text
            style={{
              color: '#a9a9a9',
              fontSize: 18,
              marginBottom: 30,
              fontWeight: 'bold',
            }}>
            New to Netflix? Sign up now.
          </Text>
        </Pressable>

        <Text
          style={{
            color: '#a9a9a9',
            fontSize: 14,
            paddingHorizontal: 20,
            marginBottom: 40,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000',
  },
  contentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#000',
    borderColor: '#a9a9a9',
    borderWidth: 2,
    marginBottom: 30,
  },
  buttonTextStyle: {color: '#fff', fontSize: 20},
});

export default LoginScreen;
