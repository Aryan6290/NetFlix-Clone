/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomLightTextInput from '../../components/CustomLightTextInput';
import SignupHeader from '../../components/SignupHeader';
import {RootStackParmsList} from '../../data/params';

interface SignupTwoProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'SIGNUPTWO'>;
}

const SignupTwo: React.FC<SignupTwoProps> = props => {
  return (
    <View style={styles.container}>
      <SignupHeader onTap={() => props.navigation.navigate('LOGIN')} />
      <View style={styles.contentBoxStyle}>
        <View style={{alignSelf: 'stretch'}}>
          <Text style={styles.stepStyle}>
            Step<Text style={{fontWeight: 'bold'}}>1</Text> of{' '}
            <Text style={{fontWeight: 'bold'}}>3</Text>
          </Text>
          <Text style={styles.titleStyle}>
            Enter your email and password to start your membership
          </Text>
          <Text style={styles.descStyle}>
            Just two more steps and you're finished! We hate paperwork, too.
          </Text>
          <Text style={styles.title2Style}>Create your account.</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}>
            <CustomLightTextInput placeholder="Email" />
            <CustomLightTextInput placeholder="Password" />
          </View>
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
    paddingRight: 20,
  },
  title2Style: {
    marginTop: 20,
    marginLeft: 35,
    color: '#000',
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '700',
    paddingRight: 20,
  },
  descStyle: {
    marginLeft: 35,
    color: '#333',
    paddingRight: 20,
    fontSize: 20,
  },
});

export default SignupTwo;
