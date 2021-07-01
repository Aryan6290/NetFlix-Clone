/* eslint-disable react-native/no-inline-styles */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import CaraouselHeader from '../components/CaraouselHeader';
import CaraouselItem from '../components/CaraouselItem';
import {RootStackParmsList} from '../data/params';
import {CarouselList, CarouselModel} from '../models/CarouselModel';

interface CaraouselScreenProps {
  navigation: StackNavigationProp<RootStackParmsList>;
  route: RouteProp<RootStackParmsList, 'CARAOUSEL'>;
}
interface RenderItemProps {
  item: CarouselModel;
  index: number;
}

const CaraouselScreen: React.FC<CaraouselScreenProps> = () => {
  const [pageCount, setPageCount] = useState(0);
  const itemWidth = Dimensions.get('screen').width;
  const carouselRef = useRef<Carousel<CarouselModel>>(null);
  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    return (
      <CaraouselItem
        index={index}
        imageUrl={item.imageUrl.toString()}
        subtitle={item.subtitle}
        title={item.title}
      />
    );
  }, []);
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={CarouselList}
        renderItem={renderItem}
        sliderWidth={itemWidth}
        itemWidth={itemWidth}
        onSnapToItem={index => setPageCount(index)}
      />

      {/* <CaraouselItem
        imageUrl="../../assets/background.jpg"
        subtitle="Everything on Netflix , starting at just ₹ 199"
        title="Unlimited entertainment one low price."
      /> */}
      <CaraouselHeader />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: Dimensions.get('screen').width,
          alignSelf: 'stretch',
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={CarouselList.length}
          activeDotIndex={pageCount}
          containerStyle={{}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <Pressable
          // onPress={() => props.navigation.navigate('SIGNUPONE')}
          style={styles.btnStyle}>
          <Text style={styles.btnTextStyle}>GET STARTED</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: StatusBar.currentHeight! - 10,
  },
  btnStyle: {
    width: '95%',
    marginBottom: 10,
    elevation: 10,
    backgroundColor: '#F40612',
    padding: 16,
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
});

export default CaraouselScreen;
