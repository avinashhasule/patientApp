import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../styles/font';

const styles = StyleSheet.create({
  backgroundViewStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    shadowOpacity: 1,
  },
  lottieViewContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lottieStyle: {
    width: 110,
    height: 110,
  },
  textStyle: {
    ...getFontFamily(16, '500'),
    color: '#475467',
  },
});

export default styles;
