import React from 'react';
import {Pressable} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

interface PlanBoxProps {
  name: string;

  onTap: () => void;
  bgColor: string;
}

const PlanBox: React.FC<PlanBoxProps> = props => {
  return (
    <Pressable onPress={props.onTap} style={{paddingBottom: 20}}>
      <View style={[styles.boxStyle, {backgroundColor: props.bgColor}]}>
        <Text style={styles.nameStyle}>{props.name}</Text>
      </View>
      {props.bgColor == '#F40612' && (
        <View style={[styles.triangle, {backgroundColor: props.bgColor}]} />
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  boxStyle: {
    flex: 1,

    height: 80,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    // backgroundColor: '#F40612',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  triangle: {
    height: 20,
    position: 'absolute',
    width: 20,
    bottom: 10,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: '#F40612',
    alignSelf: 'center',
    transform: [{rotate: '45deg'}],
  },
});
export default PlanBox;
