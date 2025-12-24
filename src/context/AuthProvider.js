import {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import useCustomFetch from '../hooks/useCustomFetch';
import {clearAllLocalStorage, saveLocalStorage} from '../utils/LocalStorage';
import {apiURL} from '../utils/Constants';
import {useNavigation} from '@react-navigation/native';

export const includeToken = true; // process.env.NEXT_PUBLIC_SEND_AUTH_TOKEN === 'true';

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const {apihelper} = useCustomFetch();
  const navigation = useNavigation();

  const handleLogin = useCallback(async data => {
    saveLocalStorage('patient-portal-token', data);
  }, []);

  useEffect(() => {
    const verifyUser = async () => {
      setLoading(true);
      const response = await apihelper(apiURL.verifyUser);
      if (response?.status) {
        saveLocalStorage(
          'patient-portal-token',
          JSON.stringify(response.success?.token),
        );
        setUser({
          mobileNumber: response.success?.username,
        });
        setLoading(false);
        // CommonActions.reset({
        //   index: 0,
        //   routes: [{name: 'patient-grid'}],
        // });
        // if (
        //   pathname === '/login' ||
        //   pathname === '/' ||
        //   pathname.includes('/login/')
        // ) {
        //   router.push('/patient');
        // }
      } else {
        clearAllLocalStorage('patient-portal-token');
        setLoading(false);
        // CommonActions.reset({
        //   index: 0,
        //   routes: [{name: 'Login'}],
        // });
        // if (!pathname.includes('/login')) {
        //   router.push('/login');
        // }
      }
    };
    // if (logoutBtnClicked) return;
    // if (user?.mobileNumber || pathname.includes('billdetails')) {
    //   return;
    // }
    // if (!user?.mobileNumber && pathname.includes('login')) {
    // return;
    // }
    verifyUser();
  }, [apihelper, navigation, user.mobileNumber]);

  const handleLogout = useCallback(async () => {
    await apihelper('patientportal/Login/Logout');
    setLoading(true);
    setUser({});
    clearAllLocalStorage();
    // window.location.href = '/login';
    setLoading(false);
  }, [apihelper]);

  const value = useMemo(
    () => ({
      loading,
      setLoading,
      handleLogout,
      handleLogin,
      user,
      setUser,
    }),
    [loading, setLoading, handleLogin, handleLogout, user, setUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const {token, handleLogin, loading, setLoading, user, setUser, handleLogout} =
    useContext(AuthContext);
  return {
    token,
    handleLogin,
    loading,
    setLoading,
    user,
    setUser,
    handleLogout,
  };
};
