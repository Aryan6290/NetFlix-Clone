import React from 'react';
import {StyleSheet, View} from 'react-native';

interface DetailsModalContentProps {}

const DetailsModalContent: React.FC<DetailsModalContentProps> = props => {
  return <View></View>;
};
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#000',
    padding: 20,
  },
});
export default DetailsModalContent;
