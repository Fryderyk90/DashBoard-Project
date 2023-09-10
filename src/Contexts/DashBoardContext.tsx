import React, { createContext, useContext, ReactNode, useState } from 'react';
import WeatherWidget from '../ui/components/Widgets/Weather/WeatherWidget';
import CalendarWidget from '../ui/components/Widgets/Calendar/CalendarWidget';
import TodoWidget from '../ui/components/Widgets/Todo/TodoWidget';
import TransportWidget from '../ui/components/Widgets/Transport/TransportWidget';
import { WidgetType } from '../types';
import MenuItem from '../ui/components/MenuItem/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCloud, faCalendar, faListAlt, faSubway } from '@fortawesome/free-solid-svg-icons';
import { CalendarContextProvider } from './CalendarContext';

interface DashBoardContextType {
    widgets: Array<JSX.Element>
    menuItems: Array<JSX.Element>
    selectedWidget: WidgetType | null
    isMenuOpen: boolean
    HandleSelectedWidget: (widget: WidgetType) => void
    HandleMenu: (args: boolean) => void
}

const DashboardContext = createContext<DashBoardContextType | undefined>(undefined);

export const DashboardContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [selectedWidget, setSelectedWidget] = useState<WidgetType | null>(null);
    const HandleSelectedWidget = (widget: WidgetType) => {
        setSelectedWidget(widget)
    }
    const HandleMenu = (args: boolean) => {
        setIsMenuOpen(args)
    }
    const menuItems = [
        <ul>
            <MenuItem
                key={"Home"}
                {...(!isMenuOpen ? {} : { text: "Home" })}
                icon={<FontAwesomeIcon icon={faHome} />}
            />
            <MenuItem
                key={"Weather"}
                {...(!isMenuOpen ? {} : { text: "Weather" })}
                icon={<FontAwesomeIcon icon={faCloud} />}
            />
            <MenuItem
                key={"Calendar"}
                {...(!isMenuOpen ? {} : { text: "Calendar" })}
                icon={<FontAwesomeIcon icon={faCalendar} />}
            />
            <MenuItem
                key={"Todos"}
                {...(!isMenuOpen ? {} : { text: "Todos" })}
                icon={<FontAwesomeIcon icon={faListAlt} />}
            />
            <MenuItem
                key={"Transport"}
                {...(!isMenuOpen ? {} : { text: "Transport" })}
                icon={<FontAwesomeIcon icon={faSubway} />}
            />
        </ul>
    ]
    const widgets: Array<JSX.Element> = [
        <WeatherWidget />,
        <CalendarContextProvider>

            <CalendarWidget />
        </CalendarContextProvider>
        ,
        <TodoWidget />,
        <TransportWidget />,
    ]


    return (
        <DashboardContext.Provider value={
            {
                widgets,
                menuItems,
                selectedWidget,
                HandleSelectedWidget,
                isMenuOpen,
                HandleMenu
            }}>
            {children}
        </DashboardContext.Provider>
    );


}

export function useDashboardContext(): DashBoardContextType {
    const context = useContext(DashboardContext);
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
}