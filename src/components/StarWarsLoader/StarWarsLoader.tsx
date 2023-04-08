import React, {useEffect, useRef, useState, useCallback} from 'react';
import {Container, Star, StarsContainer} from './StarWarsLoader.styles';
import {Animated} from 'react-native';
import DeathStar from '../DeathStar/DeathStar';
import {useAppSelector} from '../../redux/hooks/hooks';

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
  const [stars, setStars] = useState(() => generateStars(100));
  const rotation = useRef(new Animated.Value(0)).current;
  const animationValues = useRef(
    stars.map(() => new Animated.Value(0)),
  ).current;
  const isAnimating = useAppSelector(state => state.animation.isAnimating);

  const animateStar = useCallback(
    (index: number) => {
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
    },
    [animationValues],
  );

  useEffect(() => {
    if (isAnimating) {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 360,
          duration: 5000,
          useNativeDriver: true,
        }),
      ).start();

      Array.from({length: 10}).forEach((_, index) => {
        animateStar(index);
      });
    }

    return () => {
      animationValues.forEach(animationValue => {
        animationValue.stopAnimation();
      });
      rotation.stopAnimation();
    };
  }, [isAnimating, rotation, animationValues, animateStar]);

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
        source={require('../../assets/images/deathStar.jpg')}
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
