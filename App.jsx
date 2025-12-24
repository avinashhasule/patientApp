import React, {useEffect, useState} from 'react';
import {AuthProvider} from './src/context/AuthProvider';
import {MastersProvider} from './src/context/MastersProvider';
import {ToastProvider} from './src/context/ToastProvider';
import PatientGrid from './src/screens/Patient';
import Login from './src/screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {getParsedLocalStorageObject} from './src/utils/LocalStorage';
import {LocalStorageKey} from './src/utils/Constants';
import SplashScreen from './src/components/splash';
import AppNavigation from './src/components/AppNavigation';

const Stack = createNativeStackNavigator();

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [initialRoute, setInitialRoute] = useState();
  const userData =
    getParsedLocalStorageObject(LocalStorageKey.userData) || null;

  const token = userData?.token;

  const changeAnimationStatus = param => {
    setAnimationCompleted(param);
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (token) {
        setInitialRoute('patient-grid');
      } else {
        setInitialRoute('login');
      }
    };
    checkLoginStatus();
  }, [token]);

  if (!animationCompleted && !!initialRoute) {
    return <SplashScreen onFinish={changeAnimationStatus} />;
  }

  return (
    <NavigationContainer>
      <ToastProvider>
        <AuthProvider>
          <MastersProvider>
            <AppNavigation />
          </MastersProvider>
        </AuthProvider>
      </ToastProvider>
    </NavigationContainer>
  );
}

export default App;
