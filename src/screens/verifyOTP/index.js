import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View, Image, Platform} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import LinkButton from '../../components/LinkButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OtpInput} from 'react-native-otp-entry';
import verifiedImage from '../../assets/images/verifiedIcon.png';
import {useNavigation} from '@react-navigation/native';
import KeyboardAwareWrapper from '../../components/KeyboardAwareWrapper';
import useCustomFetch from '../../hooks/useCustomFetch';
import Loader from '../../components/Loader';
import {formatMobileNumber} from '../../utils/CommonFunction';
import {useToast} from '../../context/ToastProvider';
import {useAuth} from '../../context/AuthProvider';

const VerifyOTP = ({route}) => {
  console.log('VerifyOTP route params', route);
  const {phoneNumber} = route.params;
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const {apihelper} = useCustomFetch();
  const [isLoading, setIsLoading] = useState(false);
  const otpRef = useRef(null);
  const {showToast} = useToast();
  const [otpText, setOtpText] = useState('');
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const {handleLogin, setUser} = useAuth();

  useEffect(() => {
    if (seconds || minutes) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [minutes, seconds, setSeconds, setMinutes]);

  const validateOTP = useCallback(() => {
    if (!otpText || otpText.length < 6) {
      setError('Please enter OTP');
      return null;
    }
    return otpText;
  }, [otpText]);

  const verifyOtp = useCallback(async () => {
    const otpValue = validateOTP();
    if (!otpValue) {
      return;
    }
    setIsLoading(true);
    const response = await apihelper('patientportal/Login/VerifyOTP', {
      method: 'POST',
      headers: {},
      data: {
        mobileNumber: phoneNumber,
        otpValue: otpValue,
      },
    });
    if (response.status) {
      handleLogin(response?.success?.token);
      setUser({
        mobileNumber: phoneNumber,
      });
      navigation.reset({
        index: 0,
        routes: [{name: 'patient-grid'}],
      });
    } else {
      showToast({
        type: 'error',
        message: response?.error?.message || 'Something went wrong',
      });

      if (response?.error?.code === 'ExceedOtp') {
        setOtpText('');
        setMinutes(0);
        setSeconds(0);
      }
    }
    setIsLoading(false);
  }, [
    validateOTP,
    apihelper,
    phoneNumber,
    handleLogin,
    setUser,
    navigation,
    showToast,
  ]);

  function onChangeOtp(value) {
    setOtpText(value);
    setError('');
  }

  const clearOtp = () => {
    otpRef.current?.clear();
    setError('');
  };

  const resendOTPSubmit = () => {
    const verifyUser = async () => {
      try {
        const response = await apihelper(
          `patientportal/Login/ResendOTP/${phoneNumber}`,
        );
        setIsLoading(false);
        setSeconds(0);
        setMinutes(0);
        if (response.status) {
          showToast({
            type: 'success',
            message: `We just sent an OTP on the Mobile Number ${phoneNumber}. Enter the OTP below to proceed`,
          });
        } else {
          clearOtp();
          showToast({type: 'error', message: response.error.message});
        }
      } catch (err) {
        clearOtp();
        showToast({type: 'error', message: err.message});
      }
    };
    verifyUser();
  };

  return (
    <SafeAreaView style={styles.topContainer}>
      <KeyboardAwareWrapper
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Loader loading={isLoading} />
        {/* <NavigationHeader navigation={navigation} showBackOption={true} /> */}
        <View style={styles.parentContainer}>
          <Image source={verifiedImage} style={styles.backButtonContainer} />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Verification Code</Text>
            <Text style={styles.noteText}>
              We've sent an OTP to the mobile number below.
            </Text>
            <Text style={styles.numberText}>
              {formatMobileNumber(phoneNumber)}
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <OtpInput
              ref={otpRef}
              secureTextEntry={true}
              focusColor="#1570EF"
              placeholder="-"
              numberOfDigits={6}
              textContentType="oneTimeCode"
              autoComplete={
                Platform.OS === 'android' ? 'sms-otp' : 'one-time-code'
              }
              onTextChange={onChangeOtp}
              theme={{
                focusStickStyle: styles.focusStickStyle,
              }}
            />
          </View>

          <View style={styles.resendLinkContainer}>
            <Text style={styles.resendText}>
              Didn't receive the OTP?{' '}
              {!!seconds && (
                <>
                  <Text style={styles.time}>
                    {`${minutes.toString().padStart(2, '0')}:${seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </Text>{' '}
                  remaining
                </>
              )}
            </Text>
            <LinkButton title={'Resend OTP'} onPress={resendOTPSubmit} />
          </View>
          <Button
            title={'Verify'}
            disable={otpText.length !== 6}
            onPress={verifyOtp}
          />
        </View>
      </KeyboardAwareWrapper>
    </SafeAreaView>
  );
};

export default VerifyOTP;
