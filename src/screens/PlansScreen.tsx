/* eslint-disable react-native/no-inline-styles */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SignupHeader from '../components/SignupHeader';
import {RootStackParmsList} from '../data/params';
import Icon from 'react-native-vector-icons/Ionicons';
import PlanBox from '../components/PlanBox';
interface PlansScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'PLANS'>;
}

const PlansScreen: React.FC<PlansScreenProps> = props => {
  const plans = ['Mobile', 'Basic', 'Standard', 'Premium'];
  const [selectedPlan, setSelectedPlan] = useState<number>(0);
  return (
    <View style={styles.container}>
      <SignupHeader onTap={() => props.navigation.navigate('LOGIN')} />
      <ScrollView style={{flex: 1}}>
        <View style={{marginLeft: 35}}>
          <Text style={styles.stepStyle}>
            STEP<Text style={{fontWeight: 'bold'}}> 2</Text> OF{' '}
            <Text style={{fontWeight: 'bold'}}>3</Text>
          </Text>
          <Text style={styles.titleStyle}>
            Choose the plan that's right for you
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <Icon
              style={{alignSelf: 'flex-end'}}
              name="checkmark-outline"
              size={30}
              color="#F40612"
            />
            <Text style={styles.descStyle}>
              Watch as much as you want. Advert-free
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <Icon
              style={{alignSelf: 'flex-end'}}
              name="checkmark-outline"
              size={30}
              color="#F40612"
            />
            <Text style={styles.descStyle}>Recommendations just for you.</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <Icon
              style={{alignSelf: 'flex-end'}}
              name="checkmark-outline"
              size={30}
              color="#F40612"
            />
            <Text style={styles.descStyle}>
              Change or cancel your plan anytime.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            paddingHorizontal: 30,

            justifyContent: 'space-between',
          }}>
          {plans.map((item, _i) => (
            <PlanBox
              bgColor={selectedPlan == _i ? '#F40612' : '#EF6B72'}
              name={item}
              key={item}
              onTap={() => setSelectedPlan(_i)}
            />
          ))}

          {/* <PlanBox name="Mobile" />
          <PlanBox name="Mobile" />
          <PlanBox name="Mobile" /> */}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stepStyle: {
    color: '#333',

    fontSize: 16,
    // fontWeight: ,
  },
  titleStyle: {
    color: '#000',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 20,
  },
  descStyle: {
    marginLeft: 16,

    color: '#333',
    paddingRight: 50,
    fontSize: 18,
  },
});
export default PlansScreen;
