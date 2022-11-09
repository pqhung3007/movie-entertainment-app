import React, { useState } from "react";

export default function useLocalStorage<T>(keyName: string, defaultValue: T) {
  const [storedValue, setStoredValue] = useState(() =>
    getLocalValue(keyName, defaultValue)
  );

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
}

function getLocalValue(key: string, defaultValue: any) {
  try {
    const storedItem = window.localStorage.getItem(key);

    if (storedItem) {
      return JSON.parse(defaultValue);
    } else {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  } catch (error) {
    console.log(error);
  }
}
