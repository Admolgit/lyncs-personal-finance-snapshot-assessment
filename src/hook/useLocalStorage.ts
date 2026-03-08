import { useState, useEffect } from "react";
import type { ITransaction } from "../utils/calculations";

export default function useLocalStorage(key: string, initialValue: ITransaction) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
