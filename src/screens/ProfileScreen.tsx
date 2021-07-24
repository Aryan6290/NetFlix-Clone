/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';

import {profileList} from '../models/Profile';

import {FAB} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParmsList} from '../data/params';

interface ProfileScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'PROFILE'>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[...profileList, {index: 4, name: '', imageUrl: ''}]}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        numColumns={2}
        // keyExtractor={(item, index) => data[index].name}
        renderItem={({item}) => (
          <View key={item.index} style={styles.itemStyle}>
            {item.index > 3 ? (
              <FAB
                onPress={() => props.navigation.navigate('MAIN')}
                key={item.index}
                style={styles.fabStyle}
                icon="plus"
              />
            ) : (
              <Pressable
                onPress={() => props.navigation.navigate('MAIN')}
                style={styles.imageContainerStyle}>
                <Image
                  key={item.name}
                  style={styles.imageStyle}
                  source={{uri: item.imageUrl}}
                />
                <Text style={styles.textStyle}>{item.name}</Text>
              </Pressable>
            )}
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  itemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    color: '#fff',
    paddingTop: 10,
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabStyle: {
    backgroundColor: '#a9a9a9',
    alignSelf: 'center',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    width: 80,
    borderRadius: 40,
  },
  imageStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  imageContainerStyle: {
    alignSelf: 'center',
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
  },
});
export default ProfileScreen;
