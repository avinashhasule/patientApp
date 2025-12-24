import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {getFontFamily} from '../styles/font';

const LinkButton = ({onPress, title, disable, container}) => {
  return (
    <TouchableOpacity
      style={[styles.container, container]}
      onPress={() => onPress && onPress()}
      disabled={disable}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleText: {
    ...getFontFamily(14, '500'),
    color: '#1570EF',
  },
  container: {
    width: '40%',
  },
});

export default LinkButton;
