/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import SignupHeader from '../../components/SignupHeader';
import {RootStackParmsList} from '../../data/params';
import Icon from 'react-native-vector-icons/Ionicons';
interface SignupThreeProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'SIGNUPTHREE'>;
}

const SignupThree: React.FC<SignupThreeProps> = props => {
  return (
    <View style={styles.container}>
      <SignupHeader onTap={() => props.navigation.navigate('LOGIN')} />
      <View style={styles.contentBoxStyle}>
        <Icon name="checkmark-circle-outline" size={50} color="#F40612" />
        <Text style={styles.stepStyle}>
          STEP<Text style={{fontWeight: 'bold'}}> 2</Text> OF{' '}
          <Text style={{fontWeight: 'bold'}}>3</Text>
        </Text>
        <Text style={styles.titleStyle}>Choose your plan.</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 18,
          }}>
          <Icon name="checkmark-outline" size={30} color="#F40612" />
          <Text style={styles.descStyle}>
            No commitments, cancel at any time.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 18,
          }}>
          <Icon name="checkmark-outline" size={30} color="#F40612" />
          <Text style={styles.descStyle}>
            Everything on Netflix for one low price.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 18,
          }}>
          <Icon name="checkmark-outline" size={30} color="#F40612" />
          <Text style={styles.descStyle}>No ads and no extra fees. Ever.</Text>
        </View>
        <Pressable
          onPress={() => props.navigation.navigate('SIGNUPTHREE', {})}
          style={styles.btnStyle}>
          <Text style={styles.btnTextStyle}>SEE THE PLANS</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentBoxStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30,
    alignSelf: 'stretch',
  },
  btnStyle: {
    marginTop: 20,
    width: '90%',
    marginRight: 25,
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
  stepStyle: {
    color: '#333',
    marginTop: 16,
    fontSize: 16,
    // fontWeight: ,
  },
  titleStyle: {
    color: '#000',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 20,
  },
  descStyle: {
    marginLeft: 20,

    color: '#333',
    paddingRight: 50,
    fontSize: 18,
  },
});

export default SignupThree;
