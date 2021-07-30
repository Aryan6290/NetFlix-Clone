import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

interface MovieThumbProps {
  url: string;
}

const MovieThumb: React.FunctionComponent<MovieThumbProps> = props => {
  return (
    <Pressable>
      <Image
        style={styles.containerStyle}
        resizeMode={'cover'}
        source={{uri: props.url}}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    height: 180,
    width: 120,
    borderRadius: 6,
    marginRight: 10,
  },
});
export default MovieThumb;
