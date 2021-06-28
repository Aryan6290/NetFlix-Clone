/* eslint-disable react-native/no-inline-styles */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import SignupHeader from '../../components/SignupHeader';
import {RootStackParmsList} from '../../data/params';

interface SignupOneProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'SIGNUPONE'>;
}

const SignupOne: React.FC<SignupOneProps> = props => {
  return (
    <View style={styles.container}>
      <SignupHeader onTap={() => props.navigation.navigate('LOGIN')} />
      <View style={styles.contentBoxStyle}>
        <View style={{alignSelf: 'stretch'}}>
          <Image
            source={require('../../../assets/devices.png')}
            style={styles.imageStyle}
          />
          <Text style={styles.stepStyle}>
            Step<Text style={{fontWeight: 'bold'}}>1</Text> of{' '}
            <Text style={{fontWeight: 'bold'}}>3</Text>
          </Text>
          <Text style={styles.titleStyle}>Set up your Account</Text>
          <Text style={styles.descStyle}>
            Netflix is personalised for you. Use your email and create a
            password to watch Netflix on any devices at any time.
          </Text>
          <Pressable
            onPress={() => props.navigation.navigate('SIGNUPTWO', {})}
            style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>CONTINUE</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnStyle: {
    marginTop: 20,
    width: '85%',
    backgroundColor: '#F40612',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentBoxStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepStyle: {
    marginLeft: 35,
    color: '#333',
    marginTop: 16,
    fontSize: 16,
    // fontWeight: ,
  },
  imageStyle: {
    marginLeft: 10,
  },
  titleStyle: {
    marginLeft: 35,
    color: '#000',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  descStyle: {
    marginLeft: 35,
    color: '#333',
    paddingRight: 20,
    fontSize: 20,
  },
});

export default SignupOne;
