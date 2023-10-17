import React from "react";
import { createContext, useState, useEffect } from "react";

type ContextChildrenType = { children: React.ReactNode };

export type rootTypes = {
  changeTheme: boolean;
  setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>;
  alerts: number;
  setAlerts: React.Dispatch<React.SetStateAction<number>>;
};

export const store = createContext<rootTypes | null>(null);

const getInitialState = () => {
  const changeTheme = localStorage.getItem("changeTheme");
  return changeTheme ? JSON.parse(changeTheme) : false;
};

export default function AppProvider({ children }: ContextChildrenType) {
  const [changeTheme, setChangeTheme] = useState(getInitialState);
  const [alerts, setAlerts] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("changeTheme", JSON.stringify(changeTheme));
  }, [changeTheme]);

  return (
    <store.Provider value={{ changeTheme, setChangeTheme, alerts, setAlerts }}>
      {children}
    </store.Provider>
  );
}
