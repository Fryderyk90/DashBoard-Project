import { createContext, useContext, ReactNode, useState } from 'react';
import { CalendarEvent } from '../types';

// Define your context shape
interface CalendarContextType {
    events: Array<CalendarEvent>
}

// Create the context
const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

// Define a provider component
interface CalendarContextProviderProps {
    children: ReactNode;
}

export const CalendarContextProvider: React.FC<CalendarContextProviderProps> = ({ children }) => {
    const TestEvents = [
        { title: 'Event 1', date: '2023-09-01', color: 'red' },
        { title: 'Event 2', date: '2023-09-07', color: 'blue' },
        { title: 'Event 3', date: '2023-09-15', color: 'green' }
    ];
    const [events] = useState<Array<CalendarEvent>>(TestEvents)
    
    return (
        <CalendarContext.Provider value={
            {
                events
            }}>
            {children}
        </CalendarContext.Provider>
    );
}

// Create a custom hook for easy access to the context
export const useCalendarContext = (): CalendarContextType => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error("useCalendarContext must be used within an CalendarContextProvider");
    }
    return context;
}