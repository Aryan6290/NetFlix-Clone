import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {RootStackParmsList} from '../data/params';

interface SplashScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'SPLASH'>;
}

const SplashScreen: React.FC<SplashScreenProps> = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('LOGIN');
    }, 5000);
  }, [props.navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/biglogo.jpg')}
        style={styles.imageStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  imageStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default SplashScreen;
