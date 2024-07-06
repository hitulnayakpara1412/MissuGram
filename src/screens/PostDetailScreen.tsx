import React, {FC, useCallback} from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import Background from '../assets/images/post_background.png';
import PostText from '../assets/images/post_text.png';
import Action from '../components/Action';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

const ImageComponent = Animated.createAnimatedComponent(Image);

const PostDetailScreen: FC = () => {
  const scale = useSharedValue(0);

  const handleDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(100, withSpring(0));
      }
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <TapGestureHandler
        maxDelayMs={250}
        onActivated={handleDoubleTap}
        numberOfTaps={2}>
        <Animated.View style={styles.container}>
          <ImageBackground
            source={Background}
            style={styles.imageBackgroundContainer}>
            <Image source={PostText} resizeMode="contain" />
            <ImageComponent
              source={require('../assets/images/heart.png')}
              style={[styles.heartIcon, animatedStyle]}
            />
            <Action isDetailScreen />
          </ImageBackground>
        </Animated.View>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgroundContainer: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
});

export default PostDetailScreen;
