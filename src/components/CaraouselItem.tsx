/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {ImageBackground, Pressable, Text, View} from 'react-native';

interface CaraouselItemProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const CaraouselItem: React.FC<CaraouselItemProps> = props => {
  return (
    <ImageBackground
      style={[styles.backgroundStyle]}
      imageStyle={[
        props.index !== 0 ? {resizeMode: 'contain', marginBottom: 100} : null,
      ]}
      source={props.imageUrl}>
      <View style={{flex: 1}}>
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
            {props.title}
            {/* Unlimited entertainment one low price. */}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 20,
              color: '#fff',
              marginTop: 20,

              paddingBottom: 100,
              elevation: 10,
              paddingHorizontal: 40,
            }}>
            {props.subtitle}
            {/* Everything on Netflix , starting at just ₹ 199 */}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
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
  backgroundStyle: {
    flex: 1,
  },
});

export default CaraouselItem;
