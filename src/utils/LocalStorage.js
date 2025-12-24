import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const saveLocalStorage = (key, value) => {
  storage.set(key, value);
};

export const getLocalStringStorage = key => {
  return storage.getString(key);
};

export const getLocalNumberStorage = key => {
  return storage.getNumber(key);
};

export const deleteLocalStorage = key => {
  return storage.delete(key);
};

export const clearAllLocalStorage = key => {
  return storage.clearAll();
};

export const getLocalBooleanStorage = key => {
  return storage.getBoolean(key);
};

// Parse Stored Object

export const getParsedLocalStorageObject = key => {
  const value = storage.getString(key);
  return value ? JSON.parse(value) : null;
};
