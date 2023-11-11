import React from "react";
import { createContext, useState } from "react";

type ContextChildrenType = { children: React.ReactNode };

export type rootTypes = {
  alerts: number;
  setAlerts: React.Dispatch<React.SetStateAction<number>>;
};

export const store = createContext<rootTypes | null>(null);

export default function AppProvider({ children }: ContextChildrenType) {
  const [alerts, setAlerts] = useState<number>(0);

  return (
    <store.Provider value={{ alerts, setAlerts }}>{children}</store.Provider>
  );
}
