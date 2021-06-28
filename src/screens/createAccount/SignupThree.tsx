/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SignupThreeProps {}

const SignupThree: React.FC<SignupThreeProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Signup screen three</Text>
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

export default SignupThree;
