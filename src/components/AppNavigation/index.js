import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import VerifyOTP from '../../screens/verifyOTP';

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
};

export default AppNavigation;
