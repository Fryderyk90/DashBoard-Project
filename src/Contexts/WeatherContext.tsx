import { createContext, useContext, ReactNode, useState } from 'react';

// Define your context shape
interface WeatherContextType {
  exampleState: string;
  setExampleState: (value: string) => void;
}

// Create the context
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Define a provider component
interface WeatherContextProviderProps {
  children: ReactNode;
}

export const WeatherContextProvider: React.FC<WeatherContextProviderProps> = ({ children }) => {
  const [exampleState, setExampleState] = useState<string>('Initial Value');

  return (
    <WeatherContext.Provider value={{ exampleState, setExampleState }}>
      {children}
    </WeatherContext.Provider>
  );
}

// Create a custom hook for easy access to the context
export const useWeatherContext = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within an WeatherContextProvider");
  }
  return context;
}