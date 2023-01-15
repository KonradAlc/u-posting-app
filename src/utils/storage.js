export const getLocalStorageItem = (key) => {
  const value = window.localStorage.getItem(key);
  if (value === "") {
    return null;
  }
  return value;
};

export const setLocalStorageItem = (key, value) => {
  if (value == null) {
    value = "";
  }
  window.localStorage.setItem(key, value);
};

export const removeLocalStorageItem = (key) => {
  window.localStorage.removeItem(key);
};
