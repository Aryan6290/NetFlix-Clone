import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SearchScreenProps {}

const SearchScreen: React.FunctionComponent<SearchScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}> Search</Text>
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

export default SearchScreen;
