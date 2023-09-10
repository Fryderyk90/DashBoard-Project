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
    maxColumns: number
}

const DashboardContext = createContext<DashBoardContextType | undefined>(undefined);

export const DashboardContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [selectedWidget, setSelectedWidget] = useState<WidgetType | null>(null);
    const [maxColumns, setMaxColumns] = useState<number>(2);
    function HandleSelectedWidget(widget: WidgetType) {
        setMaxColumns(widget === 'home' ? 2 : 1)
        setSelectedWidget(widget === 'home' ? null : widget)
    }
    const HandleMenu = (args: boolean) => {
        setIsMenuOpen(args)

    }
    const menuItems = [
        <ul>
            <MenuItem
                key={"home"}
                {...(!isMenuOpen ? {} : { text: "Home" })}
                icon={<FontAwesomeIcon icon={faHome} />}
                handleSelection={() => HandleSelectedWidget('home')}
            />
            <MenuItem
                key={"weather"}
                {...(!isMenuOpen ? {} : { text: "Weather" })}
                icon={<FontAwesomeIcon icon={faCloud} />}
                handleSelection={() => HandleSelectedWidget('weather' as WidgetType)}
            />
            <MenuItem
                key={"calendar"}
                {...(!isMenuOpen ? {} : { text: "Calendar" })}
                icon={<FontAwesomeIcon icon={faCalendar} />}
                handleSelection={() => HandleSelectedWidget('calendar' as WidgetType)}
            />
            <MenuItem
                key={"todo"}
                {...(!isMenuOpen ? {} : { text: "Todos" })}
                icon={<FontAwesomeIcon icon={faListAlt} />}
                handleSelection={() => HandleSelectedWidget('todo' as WidgetType)}
            />
            <MenuItem
                key={"transport"}
                {...(!isMenuOpen ? {} : { text: "Transport" })}
                icon={<FontAwesomeIcon icon={faSubway} />}
                handleSelection={() => HandleSelectedWidget('transport' as WidgetType)}
            />
        </ul>
    ]
    const widgets: Array<JSX.Element> = [
        <WeatherWidget key={'weather' as WidgetType} />,
        <CalendarContextProvider key={'calendar' as WidgetType}>

            <CalendarWidget />
        </CalendarContextProvider>
        ,
        <TodoWidget key={'todo' as WidgetType} />,
        <TransportWidget key={'transport' as WidgetType} />,
    ]


    return (
        <DashboardContext.Provider value={
            {
                widgets,
                menuItems,
                selectedWidget,
                HandleSelectedWidget,
                isMenuOpen,
                HandleMenu,
                maxColumns
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