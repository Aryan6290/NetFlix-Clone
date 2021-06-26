import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParmsList} from './data/params';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';

interface RouterProps {}

const Router: React.FunctionComponent<RouterProps> = () => {
  const Stack = createStackNavigator<RootStackParmsList>();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="SPLASH">
        <Stack.Screen name="SPLASH" component={SplashScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
