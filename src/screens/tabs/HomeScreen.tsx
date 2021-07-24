import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}> Home</Text>
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
export default HomeScreen;
