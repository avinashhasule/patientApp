import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
  StyleSheet,
} from 'react-native';

const KeyboardAwareWrapper = ({children, style = {}}) => {
  return (
    <KeyboardAvoidingView
      style={[styles.keyboardAvoidingView, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.touchableWithoutFeedbackStyle}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  touchableWithoutFeedbackStyle: {
    flex: 1,
  },
});

export default KeyboardAwareWrapper;
