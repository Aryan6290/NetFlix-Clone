import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface CaraouselHeaderProps {
  onTap?: () => void;
}

const CaraouselHeader: React.FC<CaraouselHeaderProps> = props => {
  return (
    <Pressable style={styles.headerStyle}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.imageStyle}
      />
      <View style={styles.headerTextBoxStyle}>
        <Text style={styles.headerTextStyle}> PRIVACY</Text>
        <Pressable onPress={props.onTap}>
          <Text style={styles.headerTextStyle}>SIGN IN</Text>
        </Pressable>
        <Pressable>
          <Icon name="ellipsis-vertical-sharp" size={26} color="#a9a9a9" />
        </Pressable>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 5,
    // backgroundColor: '#333',
    // opacity: 0.4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  headerTextBoxStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 16,
    color: '#fff',
    padding: 16,
    fontWeight: 'bold',
  },
});

export default CaraouselHeader;
