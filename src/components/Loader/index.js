import React from 'react';
import {Modal, Text, View} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import loaderFile from '../../assets/lottie/loader.json';

const Loader = props => {
  const {loading} = props;
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.backgroundViewStyle}>
        <View style={styles.lottieViewContainer}>
          <LottieView
            source={loaderFile}
            autoPlay
            loop
            style={styles.lottieStyle}
          />
          <Text style={styles.textStyle}>Loading, please wait...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
