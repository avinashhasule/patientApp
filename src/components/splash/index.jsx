import React from 'react';
import LottieView from 'lottie-react-native';
import splash from '../../assets/lottie/splash.json';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({onFinish}) => {
  return (
    <SafeAreaView style={styles.lottieViewContainer}>
      <LottieView
        resizeMode="cover"
        source={splash}
        style={styles.lottieViewContainer}
        autoPlay
        loop={false}
        onAnimationFinish={() => onFinish(true)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lottieViewContainer: {
    flex: 1,
  },
});

export default SplashScreen;
