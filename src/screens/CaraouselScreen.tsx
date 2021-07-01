/* eslint-disable react-native/no-inline-styles */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {Pressable} from 'react-native';
import {View} from 'react-native';
import {StatusBar} from 'react-native';

import CaraouselHeader from '../components/CaraouselHeader';
import {RootStackParmsList} from '../data/params';
// import {useHeaderHeight} from '';

interface CaraouselScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'CARAOUSEL'>;
}

const CaraouselScreen: React.FC<CaraouselScreenProps> = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/background.jpg')}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <CaraouselHeader />
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              paddingTop: 50,
              position: 'absolute',
              bottom: 50,
              left: 0,
              right: 0,

              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 40,
                color: '#fff',
                fontWeight: 'bold',
                paddingHorizontal: 40,
              }}>
              Unlimited entertainment one low price.
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 20,
                color: '#fff',
                marginTop: 20,
                elevation: 10,
                paddingHorizontal: 40,
              }}>
              Everything on Netflix , starting at just ₹ 199
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => props.navigation.navigate('SIGNUPONE')}
          style={styles.btnStyle}>
          <Text style={styles.btnTextStyle}>GET STARTED</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: StatusBar.currentHeight! - 10,
  },
  btnStyle: {
    width: '95%',
    marginBottom: 10,
    elevation: 10,
    backgroundColor: '#F40612',
    padding: 16,
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
});

export default CaraouselScreen;
