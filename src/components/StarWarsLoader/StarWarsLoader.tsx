import React, {useEffect, useState, useRef} from 'react';
import {Container, Star} from './StarWarsLoader.styles';
import {Animated} from 'react-native';
import DeathStar from '../DeathStar/DeathStar';

//come up with what to do with this star ) will be very nice to have it in the future

const generateStars = (starCount: number) => {
  return Array.from({length: starCount}, (_, i) => (
    <Star
      key={i}
      style={{
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
      }}
    />
  ));
};

const StarWarsLoader = () => {
  const stars = useRef(generateStars(100)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const animationValues = useRef(
    stars.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        duration: 5000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const rotationInterpolation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      {stars.map((star, index) => (
        <Animated.View
          key={index}
          style={[
            star.props.style,
            {
              opacity: animationValues[index],
            },
          ]}>
          {star}
        </Animated.View>
      ))}
      <DeathStar
        source={require('../../../assets/images/deathStar.jpg')}
        style={{
          width: 400,
          height: 400,
          borderRadius: 150,
          transform: [{rotateY: rotationInterpolation}],
        }}
      />
    </Container>
  );
};

export default StarWarsLoader;
