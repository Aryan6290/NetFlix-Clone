/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SignupTwoProps {}

const SignupTwo: React.FC<SignupTwoProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Signup screen two</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupTwo;
