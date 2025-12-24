import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {getFontFamily} from '../styles/font';

const Button = ({onPress, title, loading, disable, showIcon = false}) => {
  return (
    <TouchableOpacity
      style={[styles.container, disable && {opacity: 0.5}]}
      onPress={() => {
        onPress && onPress();
      }}
      disabled={disable}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator color={'#ffffff'} />
        ) : (
          <Text style={styles.titleText}>{title}</Text>
        )}
        {showIcon ? (
          <Image source={require('../assets/icons/arrowRightCircle.png')} />
        ) : (
          <Text />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 48,
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#1570EF',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    ...getFontFamily(16, '600'),
    color: '#ffffff',
  },
  buttonTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
