/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface CustomLightTextInputProps {
  placeholder: string;
}

const CustomLightTextInput: React.FC<CustomLightTextInputProps> = props => {
  const [borderColor, setborderColor] = useState('#000');
  return (
    <View style={[styles.containerStyle, {borderColor: borderColor}]}>
      <TextInput
        onFocus={() => setborderColor('blue')}
        onBlur={() => setborderColor('#000')}
        style={{backgroundColor: '#fff'}}
        label={props.placeholder}
        theme={{
          colors: {text: '#333', primary: '#a9a9a9', placeholder: '#a9a9a9'},
        }}
        underlineColor={'transparent'}
        underlineColorAndroid="#fff"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    width: '80%',
    backgroundColor: '#fff',
    borderWidth: 1,
    // borderColor: '#000',
    borderRadius: 5,

    marginBottom: 20,
  },
});

export default CustomLightTextInput;
