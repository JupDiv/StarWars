import React from 'react';
import {Animated} from 'react-native';

interface DeathStarProps {
  source: any;
  style: any;
}

export default function DeathStar({source, style}: DeathStarProps) {
  return <Animated.Image source={source} style={style} />;
}
