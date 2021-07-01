import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface DeviceIconProps {
  bgColor: string;
  iconName: string;
  name: string;
}

const DeviceIcon: React.FunctionComponent<DeviceIconProps> = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
      }}>
      <Icon name={props.iconName} size={28} color={props.bgColor} />
      <Text style={{color: props.bgColor}}>{props.name}</Text>
    </View>
  );
};

export default DeviceIcon;
