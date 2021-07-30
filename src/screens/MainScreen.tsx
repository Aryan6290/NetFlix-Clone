import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParmsList, TabStackParamsList} from '../data/params';
import ComingSoonScreen from './tabs/ComingSoonScreen';
import DownloadsScreen from './tabs/DownloadsScreen';
import HomeScreen from './tabs/HomeScreen';
interface MainScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'MAIN'>;
}
const Tab = createBottomTabNavigator<TabStackParamsList>();
const MainScreen: React.FC<MainScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: '#1e1e1e',
            borderTopWidth: 0,
            height: 70,
          },
        }}>
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <MatIcons
                  name="home"
                  size={30}
                  color={focused ? '#fff' : '#a9a9a9'}
                />
                <Text
                  style={
                    focused
                      ? {color: '#fff', fontSize: 12, marginTop: 4}
                      : {color: '#a9a9a9', fontSize: 12, marginTop: 4}
                  }>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="COMINGSOON"
          component={ComingSoonScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <MatIcons
                  name="play-box-multiple"
                  size={30}
                  color={focused ? '#fff' : '#a9a9a9'}
                />
                <Text
                  style={
                    focused
                      ? {color: '#fff', fontSize: 12, marginTop: 4}
                      : {color: '#a9a9a9', fontSize: 12, marginTop: 4}
                  }>
                  Coming Soon
                </Text>
              </View>
            ),
          }}
        />
        {/* <Tab.Screen
          name="SEARCH"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <MatIcons
                  name="magnify"
                  size={30}
                  color={focused ? '#fff' : '#a9a9a9'}
                />
                <Text
                  style={
                    focused
                      ? {color: '#fff', fontSize: 12, marginTop: 4}
                      : {color: '#a9a9a9', fontSize: 12, marginTop: 4}
                  }>
                  Search
                </Text>
              </View>
            ),
          }}
        /> */}
        <Tab.Screen
          name="DOWNLOADS"
          component={DownloadsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <MatIcons
                  name="download"
                  size={30}
                  color={focused ? '#fff' : '#a9a9a9'}
                />
                <Text
                  style={
                    focused
                      ? {color: '#fff', fontSize: 12, marginTop: 4}
                      : {color: '#a9a9a9', fontSize: 12, marginTop: 4}
                  }>
                  Downloads
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
export default MainScreen;
