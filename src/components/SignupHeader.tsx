import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface LoginHeaderProps {
  onTap?: () => void;
}

const LoginHeader: React.FunctionComponent<LoginHeaderProps> = props => {
  return (
    <Pressable style={styles.headerStyle}>
      <Image
        source={require('../../assets/biglogo_bg.png')}
        style={styles.imageStyle}
      />
      <View style={styles.headerTextBoxStyle}>
        <Text style={styles.headerTextStyle}> HELP</Text>
        <Pressable onPress={props.onTap}>
          <Text style={styles.headerTextStyle}>SIGN IN</Text>
        </Pressable>
      </View>
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
    alignSelf: 'center',
  },
  headerTextBoxStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerTextStyle: {
    padding: 16,
    fontWeight: 'bold',
  },
});

export default LoginHeader;
