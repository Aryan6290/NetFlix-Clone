import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <View style={styles.headerStyle}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.imageStyle}
      />
      <View style={styles.iconViewStyle}>
        <MatIcons name="magnify" size={28} color={'#fff'} />

        <Image
          source={{
            uri: 'https://occ-0-3777-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41',
          }}
          style={styles.profileImageStyle}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageStyle: {
    height: 50,
    width: 20,
    alignSelf: 'center',
  },
  iconViewStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  profileImageStyle: {
    height: 30,
    width: 30,
    borderRadius: 5,
    marginLeft: 30,
    alignSelf: 'center',
  },
});
export default HomeHeader;
