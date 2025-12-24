import {Fonts, getFontFamily} from '../../styles/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 24,
  },
  textInputContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  textContainer: {
    width: '100%',
    gap: 12,
  },
  titleText: {
    ...getFontFamily(24, '600'),
    color: '#1D2939',
    textAlign: 'center',
  },
  noteText: {
    ...getFontFamily(14, '400'),
    color: '#475467',
    textAlign: 'center',
  },
  numberText: {
    ...getFontFamily(14, '600'),
    color: '#1570EF',
    textAlign: 'center',
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerText: {
    color: '#1570EF',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  resendLinkContainer: {
    alignItems: 'center',
  },
  resendText: {
    ...getFontFamily(14, '500'),
    color: '#475467',
    textAlign: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  focusedPinCodeContainerStyle: {
    borderColor: '#1570EF',
  },
  errorContainerStyle: {
    borderColor: '#D92D20',
    borderWidth: 1,
    padding: 10,
  },
  errorPinCodeContainerStyle: {
    borderColor: '#D92D20',
    borderWidth: 1,
  },
  focusStickStyle: {
    color: '#1570EF',
  },
  message: {
    fontSize: 14,
    fontWeight: '400',
  },

  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB', // Tailwind's blue-600
  },
  remaining: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6B7280', // Tailwind's gray-500
    paddingLeft: 4,
  },
});

export default styles;
