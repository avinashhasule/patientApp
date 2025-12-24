import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../styles/font';

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  horizontalView: {
    width: 1,
    height: 20,
    backgroundColor: '#D0D5DD',
    marginLeft: 16,
    marginRight: 16,
  },
  textInputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#EAECF0',
    backgroundColor: '#F1F5FA',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputPaddingiOS: {
    padding: 16,
  },
  textInputPaddingAndroid: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  erroTextInputContainer: {
    borderColor: '#D92D20',
  },
  textStyle: {
    display: 'flex',
    flexGrow: 1,
    ...getFontFamily(16, '500'),
    color: '#1D2939',
    width: '60%',
  },
  containerStyle: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  errorStyle: {
    marginTop: 4,
    ...getFontFamily(14, '400'),
    color: '#D92D20',
  },
  rightIconImage: {
    width: 24,
    height: 24,
  },
  leftIconImage: {
    width: 24,
    height: 24,
  },
});

export default styles;
