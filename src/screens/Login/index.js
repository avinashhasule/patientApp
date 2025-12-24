import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  Platform,
  BackHandler,
} from 'react-native';
import Button from '../../components/Button';
import TextFieldInput from '../../components/TextFieldInput';
import styles from './styles';
import loginBGImage from '../../assets/images/loginBG.png';
import logoImage from '../../assets/images/butterflyJupiterLogo.png';
import Loader from '../../components/Loader';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import KeyboardAwareWrapper from '../../components/KeyboardAwareWrapper';
import {NUMBER_CHECK_REGEX} from '../../utils/Constants';
import useCustomFetch from '../../hooks/useCustomFetch';

const Login = props => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const mobileNumbertextInput = useRef();
  const navigation = useNavigation();

  const {apihelper} = useCustomFetch();

  const [focus, setFocus] = useState({
    mobile: false,
  });
  const [phoneNumber, setPhoneNumber] = useState('');

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (navigation.canGoBack()) {
          return true;
        }
        return false;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove();
    }, [navigation]),
  );

  const validateLoginForm = useCallback(() => {
    let errorString = '';
    if (!phoneNumber) {
      errorString = 'Please enter your mobile number';
    } else if (phoneNumber.length !== 10) {
      errorString = 'Please enter valid mobile number';
    }
    if (!NUMBER_CHECK_REGEX.test(phoneNumber)) {
      errorString = 'Please enter valid mobile number';
    }
    setError(errorString);
    return errorString ? false : true;
  }, [phoneNumber]);

  const handleSendOtp = useCallback(async () => {
    const isValid = validateLoginForm();
    if (!isValid) {
      return;
    }
    setIsLoading(true);

    const response = await apihelper(
      `patientportal/Login/SendOTP/${phoneNumber}`,
    );

    navigation.push('VerifyOTP', {
      phoneNumber: phoneNumber,
    });
    setIsLoading(false);
    if (response.status) {
      // setRequestOtp(true);

      navigation.push('VerifyOTP', {
        phoneNumber: phoneNumber,
      });
    } else {
      // setToastProp({
      //   show: true,
      //   type: ToastType.ERROR,
      //   header: response?.error?.message || 'Something went wrong',
      // });
    }
    setIsLoading(false);
  }, [validateLoginForm, apihelper, phoneNumber, navigation]);

  return (
    <KeyboardAwareWrapper
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <View style={styles.parentContainer}>
        <Loader loading={isLoading} />
        <ImageBackground source={loginBGImage} style={styles.imageContainer} />
        <View style={styles.bottomContainer}>
          <Image source={logoImage} style={styles.logoImage} />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Sign In</Text>
            <Text style={styles.noteText}>
              Welcome Back, Sign in to Continue
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextFieldInput
              ref={mobileNumbertextInput}
              leftText={<Text style={styles.leftText}> +91 </Text>}
              placeholder={'Mobile Number'}
              isValidation={true}
              keyboardType={'phone-pad'}
              errorText={error}
              onChangeText={value => {
                setPhoneNumber(value);
                if (error) {
                  setError('');
                }
              }}
              textInputStyle={
                focus.phoneNumber
                  ? styles.focusBorderColor
                  : styles.unFocusBorderColor
              }
              value={phoneNumber}
              onFocus={() => setFocus({...focus, phoneNumber: true})}
              onBlur={() => setFocus({...focus, phoneNumber: false})}
            />
            <Button title={'Get OTP'} onPress={handleSendOtp} />
          </View>
        </View>
      </View>
    </KeyboardAwareWrapper>
  );
};

export default Login;
