import React from 'react';
import {DeathStarImg} from './DeathStar.styles';

interface DeathStarProps {
  source: any;
  style: any;
}

export default function DeathStar({source, style}: DeathStarProps) {
  return <DeathStarImg source={source} style={style} />;
}
