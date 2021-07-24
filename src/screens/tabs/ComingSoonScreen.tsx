import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ComingSoonScreenProps {}

const ComingSoonScreen: React.FC<ComingSoonScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}> CS</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ComingSoonScreen;
