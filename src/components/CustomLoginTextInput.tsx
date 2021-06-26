import React from 'react';

import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface CustomLoginTextInputProps {
  placeholder: string;
}

const CustomLoginTextInput: React.FC<CustomLoginTextInputProps> = props => {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        style={{backgroundColor: '#333333'}}
        label={props.placeholder}
        theme={{
          colors: {text: '#a9a9a9', primary: '#a9a9a9', placeholder: '#a9a9a9'},
        }}
        underlineColor="#333333"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    backgroundColor: '#333333',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
});
export default CustomLoginTextInput;
