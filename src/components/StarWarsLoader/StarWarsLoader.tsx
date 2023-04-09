import React, {useEffect, useRef, useState, useCallback} from 'react';
import {Container, Star, StarsContainer} from './StarWarsLoader.styles';
import {Animated} from 'react-native';
import DeathStar from '../DeathStar/DeathStar';

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

const animateStar = (animationValues: Animated.Value[], index: number) => {
  Animated.sequence([
    Animated.timing(animationValues[index], {
      toValue: 1,
      duration: 1000 + Math.random() * 2000,
      useNativeDriver: true,
    }),
    Animated.timing(animationValues[index], {
      toValue: 0,
      duration: 1000 + Math.random() * 2000,
      useNativeDriver: true,
    }),
  ]).start(() => animateStar(animationValues, index));
};

export default function StarWarsLoader() {
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

    Array.from({length: 10}).forEach((_, index) => {
      animateStar(animationValues, index);
    });

    return () => {
      animationValues.forEach(animationValue => {
        animationValue.stopAnimation();
      });
      rotation.stopAnimation();
    };
  }, [rotation, animationValues]);

  const rotationInterpolation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      <StarsContainer>
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
      </StarsContainer>
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
}
