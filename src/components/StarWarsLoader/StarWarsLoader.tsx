import React, {useEffect, useRef} from 'react';
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

export default function StarWarsLoader() {
  const stars = useRef(generateStars(100)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const animationValues = useRef(
    stars.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    let isMounted = true;

    Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        duration: 5000,
        useNativeDriver: true,
      }),
    ).start();

    const animateStar = (index: number) => {
      if (!isMounted) return;

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
      ]).start(() => animateStar(index));
    };

    animationValues.forEach((_, index) => {
      animateStar(index);
    });

    return () => {
      isMounted = false;
      animationValues.forEach(animationValue => {
        animationValue.stopAnimation();
      });
    };
  }, []);

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

StarWarsLoader;
