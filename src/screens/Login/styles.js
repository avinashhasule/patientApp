import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../styles/font';

const styles = StyleSheet.create({
  imageContainer: {
    flexGrow: 0.9,
    display: 'flex',
    width: '100%',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingTop: 0,
    alignItems: 'center',
    gap: 10,
  },
  textInputContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
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
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  parentContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  innerText: {
    color: '#1570EF',
  },
  logoImage: {
    width: 46,
    height: 57,
  },
  leftIconImage: {
    width: 24,
    height: 24,
  },
  rightIconImage: {
    width: 24,
    height: 24,
  },
  forgetContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  linkButtonStyle: {
    width: '100%',
    height: 28,
  },
  focusBorderColor: {
    borderColor: '#1570EF',
  },
  unFocusBorderColor: {
    borderColor: '#EAECF0',
  },
});

export default styles;
