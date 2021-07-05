import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParmsList} from './data/params';
import CaraouselScreen from './screens/CaraouselScreen';
import SignupOne from './screens/createAccount/SignupOne';
import SignupThree from './screens/createAccount/SignupThree';
import SignupTwo from './screens/createAccount/SignupTwo';
import LoginScreen from './screens/LoginScreen';
import PlansScreen from './screens/PlansScreen';
import ProfileScreen from './screens/ProfileScreen';
import SplashScreen from './screens/SplashScreen';

interface RouterProps {}

const Router: React.FunctionComponent<RouterProps> = () => {
  const Stack = createStackNavigator<RootStackParmsList>();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="PROFILE">
        <Stack.Screen name="SPLASH" component={SplashScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="SIGNUPONE" component={SignupOne} />
        <Stack.Screen name="SIGNUPTWO" component={SignupTwo} />
        <Stack.Screen name="SIGNUPTHREE" component={SignupThree} />
        <Stack.Screen name="PLANS" component={PlansScreen} />
        <Stack.Screen name="CARAOUSEL" component={CaraouselScreen} />
        <Stack.Screen name="PROFILE" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
