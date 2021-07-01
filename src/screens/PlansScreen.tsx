/* eslint-disable react-native/no-inline-styles */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SignupHeader from '../components/SignupHeader';
import {RootStackParmsList} from '../data/params';
import Icon from 'react-native-vector-icons/Ionicons';
import PlanBox from '../components/PlanBox';
import {PlansList} from '../models/Plan';
import DeviceIcon from '../components/DeviceIcon';
import {Pressable} from 'react-native';
interface PlansScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'PLANS'>;
}

const PlansScreen: React.FC<PlansScreenProps> = props => {
  const [selectedPlan, setSelectedPlan] = useState<number>(0);
  return (
    <View style={styles.container}>
      <SignupHeader onTap={() => props.navigation.navigate('LOGIN')} />
      <ScrollView stickyHeaderIndices={[1]} style={{flex: 1}}>
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
              marginBottom: 32,
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
        <View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              paddingHorizontal: 30,
              backgroundColor: '#fff',
              justifyContent: 'space-between',
            }}>
            {PlansList.map((item, _i) => (
              <PlanBox
                bgColor={selectedPlan == _i ? '#F40612' : '#EF6B72'}
                name={item.name}
                key={item.name}
                onTap={() => setSelectedPlan(_i)}
              />
            ))}
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#333'}}>Monthly Price</Text>
          <View
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
            }}>
            {PlansList.map((item, _i) => (
              <Text
                style={[
                  styles.planTextStyle,
                  selectedPlan == _i
                    ? {color: '#F40612', fontWeight: 'bold'}
                    : {color: '#757575'},
                ]}>
                ₹ {item.price}
              </Text>
            ))}
          </View>
          <View
            style={{
              marginVertical: 16,
              width: '90%',
              height: 1.5,
              backgroundColor: '#a9a9a9',
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Text style={{color: '#333'}}>Video Quality</Text>
          <View
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
            }}>
            {PlansList.map((item, _i) => (
              <Text
                style={[
                  styles.planTextStyle,
                  selectedPlan == _i
                    ? {color: '#F40612', fontWeight: 'bold'}
                    : {color: '#757575'},
                ]}>
                {item.videoQuality}
              </Text>
            ))}
          </View>
          <View
            style={{
              marginVertical: 16,
              width: '90%',
              height: 1.5,
              backgroundColor: '#a9a9a9',
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Text style={{color: '#333'}}>Resolution</Text>
          <View
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
            }}>
            {PlansList.map((item, _i) => (
              <Text
                style={[
                  styles.planTextStyle,
                  selectedPlan == _i
                    ? {color: '#F40612', fontWeight: 'bold'}
                    : {color: '#757575'},
                ]}>
                {item.resolution}
              </Text>
            ))}
          </View>
          <View
            style={{
              marginVertical: 16,
              width: '90%',
              height: 1.5,
              backgroundColor: '#a9a9a9',
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Text style={{color: '#333'}}>Devices you can use to watch</Text>
          <View
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-evenly',
              flexDirection: 'row',

              marginTop: 16,
            }}>
            {PlansList.map((item, _i) => (
              <View>
                {item.deviceList.map((device, _index) => (
                  <DeviceIcon
                    key={device.deviceName}
                    iconName={device.deviceIcon}
                    name={device.deviceName}
                    bgColor={selectedPlan == _i ? '#F40612' : '#757575'}
                  />
                ))}
              </View>
            ))}
          </View>
          <View
            style={{
              marginVertical: 16,
              width: '90%',
              height: 1.5,
              backgroundColor: '#a9a9a9',
            }}
          />
        </View>
        <Text
          style={{
            color: '#424242',
            fontSize: 14,
            paddingHorizontal: 20,
            marginBottom: 20,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our{' '}
          <Text style={{color: 'blue'}}>Terms of Use</Text> for more details
        </Text>
        <Text
          style={{
            color: '#424242',
            fontSize: 14,
            paddingHorizontal: 20,
            marginBottom: 30,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </Text>
        <Pressable
          onPress={() => props.navigation.navigate('LOGIN')}
          style={styles.btnStyle}>
          <Text style={styles.btnTextStyle}>CONTINUE</Text>
        </Pressable>
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
  btnStyle: {
    marginTop: 20,
    width: '90%',
    marginBottom: 30,
    backgroundColor: '#F40612',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
  planTextStyle: {fontSize: 16, color: '#333', textAlign: 'center'},
});
export default PlansScreen;
