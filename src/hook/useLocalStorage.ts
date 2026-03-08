/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export default function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
