import React, {createContext, useContext, useState, useCallback} from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({children}) => {
  const [toast, setToast] = useState({
    visible: false,
    type: 'success',
    message: '',
  });

  const showToast = useCallback(({type = 'success', message = ''}) => {
    setToast({
      visible: true,
      type,
      message,
    });
  }, []);

  const hideToast = () => {
    setToast(prev => ({...prev, visible: false}));
  };

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      {toast.visible && (
        <Toast type={toast.type} message={toast.message} setToast={hideToast} />
      )}
    </ToastContext.Provider>
  );
};
