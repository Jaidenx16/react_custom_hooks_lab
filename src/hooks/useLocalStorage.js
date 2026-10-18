import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Load the saved value when the component first renders.
  const [state, setState] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? savedValue : initialValue;
  });

  // Keep local storage up to date when the value changes.
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
