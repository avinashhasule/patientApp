import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

const KeyboardAwareWrapper = ({children, style = {}}) => {
  const route = useRoute();

  const getOffset = () => {
    switch (route.name) {
      case 'Login':
      case 'Forget':
      case 'ResetPassword':
        return 0;
      default:
        return 120;
    }
  };
  return (
    <KeyboardAvoidingView
      style={[styles.keyboardAvoidingView, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? getOffset() : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.touchableWithoutFeedbackStyle}>{children}</View>
        </ScrollView>
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
