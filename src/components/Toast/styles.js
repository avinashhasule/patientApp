import {StyleSheet, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/Scale';
import {getFontFamily} from '../../styles/font';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: verticalScale(4),
    backgroundColor: '#FEE4E2',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 12,
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    width: windowWidth - 60,
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  error: {
    backgroundColor: '#FCB6B1',
    borderBottomWidth: 2,
    borderBottomColor: '#FECDCA',
  },
  warning: {
    backgroundColor: '#FEF0C7',
    borderBottomWidth: 2,
    borderBottomColor: '#FEDF89',
  },
  success: {
    backgroundColor: '#D1FADF',
    borderBottomWidth: 2,
    borderBottomColor: '#A6F4C5',
  },
  titleTextStyle: {
    ...getFontFamily(16, '600'),
    color: '#1D2939',
  },
  messageTextStyle: {
    ...getFontFamily(14, '400'),
    color: '#475467',
    flexWrap: 'wrap',
  },
  iconContainer: {
    marginLeft: 8,
  },
  textContainer: {
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(6),
    marginRight: horizontalScale(8),
    width: '80%',
  },
});

export default styles;
