import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import VerifyOTP from '../../screens/verifyOTP';
import RegisterScreen from '../../screens/Register';
import AbhaCommunicationScreen from '../../screens/AbhaCommunication';
import PatientGrid from '../../screens/Patient';
import AppointmentListScreen from '../../screens/AppointmentList';
import AppointmentDetailsScreen from '../../screens/AppointmentDetails';
import GlobalErrorScreen from '../../screens/GlobalError';

const Stack = createNativeStackNavigator();

/**
 * AppNavigation - Root navigator for the application
 * 
 * Maps screens from Next.js registration repository:
 * - Login/VerifyOTP: existing authentication flow
 * - Register: app/register/page.js
 * - AbhaCommunication: app/register/with-abha/AbhaCommunication.js
 * - PatientGrid: app/patient/* (home)
 * - AppointmentList: app/patient/appointment/page.js
 * - AppointmentDetails: app/patient/details/page.js
 * - GlobalError: app/global-error.js
 * 
 * TODO: Add additional screens as needed from Next.js source
 * TODO: Configure screen transitions and gestures
 * TODO: Add deep linking support
 */
const AppNavigation = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbhaCommunication"
        component={AbhaCommunicationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PatientGrid"
        component={PatientGrid}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentList"
        component={AppointmentListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentDetails"
        component={AppointmentDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GlobalError"
        component={GlobalErrorScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
