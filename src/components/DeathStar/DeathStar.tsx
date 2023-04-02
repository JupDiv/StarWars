import React from 'react';
import {Animated} from 'react-native';

interface DeathStarProps {
  source: any;
  style: any;
}

const DeathStar: React.FC<DeathStarProps> = ({source, style}) => {
  return <Animated.Image source={source} style={style} />;
};

export default DeathStar;
