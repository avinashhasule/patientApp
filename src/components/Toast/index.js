import React, {useCallback, useEffect} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import styles from './styles';
import {ErrorIcon, SuccessIcon, WarningIcon} from '../../assets/icons';

const Toast = ({type, setToast, message}) => {
  const top = React.useRef(new Animated.Value(-80)).current;
  const opacity = React.useRef(new Animated.Value(3)).current;

  const animate = useCallback(() => {
    Animated.timing(top, {
      toValue: 20,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 6000,
        useNativeDriver: false,
      }).start(() => {
        setToast(false);
      });
    });
  }, [top, opacity, setToast]);

  useEffect(() => {
    animate();
  }, [animate]);

  function getTitleText() {
    switch (type) {
      case 'error':
        return 'ERROR';
      case 'warning':
        return 'WARNING';
      case 'success':
        return 'SUCCESS';
    }
  }

  function getTypeStyle() {
    switch (type) {
      case 'error':
        return styles.error;
      case 'warning':
        return styles.erwarningror;
      case 'success':
        return styles.success;
    }
  }

  return (
    <Animated.View
      style={[styles.container, {...getTypeStyle()}, {top, opacity}]}>
      <View style={styles.iconContainer}>
        {type === 'error' && <ErrorIcon style />}
        {type === 'warning' && <WarningIcon />}
        {type === 'success' && <SuccessIcon />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleTextStyle}>{getTitleText()}</Text>
        <Text ellipsizeMode="tail" style={styles.messageTextStyle}>
          {message}
        </Text>
      </View>
    </Animated.View>
  );
};

export default Toast;
