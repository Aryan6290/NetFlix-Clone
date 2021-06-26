import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface LoginHeaderProps {
  onTap?: () => void;
}

const LoginHeader: React.FunctionComponent<LoginHeaderProps> = props => {
  return (
    <Pressable onPress={props.onTap} style={styles.headerStyle}>
      <Icon name="arrow-back-sharp" color="#fff" size={30} />
      <Image
        source={require('../../assets/biglogo.jpg')}
        style={styles.imageStyle}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  imageStyle: {
    width: 110,
    height: 100,
  },
});

export default LoginHeader;
