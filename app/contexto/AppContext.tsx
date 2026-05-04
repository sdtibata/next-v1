"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  nombre: string;
  setNombre: (value: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [nombre, setNombre] = useState("Daniel");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}