import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface DownloadsScreenProps {}

const DownloadsScreen: React.FC<DownloadsScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}> Downloads</Text>
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
export default DownloadsScreen;
