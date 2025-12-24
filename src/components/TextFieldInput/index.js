import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, Platform} from 'react-native';
import styles from './styles';

const TextFieldInput = ({
  textInputStyle,
  leftIconImage,
  leftText,
  placeholder,
  keyboardType,
  secureTextEntry = false,
  onChangeText,
  value,
  rightIconImage,
  secureIconImage,
  errorText,
  isAutoCapitalize,
  textContentType,
  autoComplete,
  onFocus,
  onBlur,
  ref,
}) => {
  return (
    <View style={styles.parentContainer}>
      <View
        style={[
          styles.textInputContainer,
          errorText && styles.erroTextInputContainer,
          textInputStyle,
          Platform.OS === 'ios'
            ? styles.textInputPaddingiOS
            : styles.textInputPaddingAndroid,
        ]}>
        {leftIconImage}
        {leftText}
        <View style={styles.horizontalView} />
        <TextInput
          onBlur={onBlur}
          key={
            Platform.OS !== 'ios' ? (secureTextEntry ? 'password' : 'text') : ''
          }
          ref={ref}
          autoCapitalize={isAutoCapitalize ? 'none' : 'words'}
          placeholder={placeholder}
          style={styles.textStyle}
          keyboardType={keyboardType ?? 'default'}
          placeholderTextColor={'#98A2B3'}
          selectionColor={'#98A2B3'}
          secureTextEntry={secureTextEntry}
          onChangeText={text => {
            onChangeText(text);
          }}
          onFocus={onFocus}
          autoComplete={autoComplete}
          textContentType={textContentType}
          value={value}
        />
        {errorText && rightIconImage}
        {secureIconImage}
      </View>
      {errorText && <Text style={styles.errorStyle}>{errorText}</Text>}
    </View>
  );
};

TextFieldInput.propTypes = {
  textInputStyle: PropTypes.node,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  errorText: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  leftIconImage: PropTypes.node,
  rightIconImage: PropTypes.node,
  secureIconImage: PropTypes.node,
  leftText: PropTypes.node,
  isAutoCapitalize: PropTypes.bool,
  autoComplete: PropTypes.string,
  textContentType: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ref: PropTypes.PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any}),
  ]),
};
TextFieldInput.defaultProps = {
  isAutoCapitalize: false,
};

export default TextFieldInput;
