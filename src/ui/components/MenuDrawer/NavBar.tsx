import { useMemo, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faCloud, faCalendar, faListAlt, faSubway } from '@fortawesome/free-solid-svg-icons';
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import Weather from "../Widgets/Weather/Weather";
import Calendar from "../Widgets/Calendar/Calendar";
import Todo from "../Widgets/Todo/Todo";
import Transport from "../Widgets/Transport/Transport";

export type widgetType = 'weather' | 'calendar' | 'todo' | 'transport'

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedWidget, setSelectedWidget] = useState<widgetType | null>(null);

  const handleOpenSidebar = () => setIsOpen(true);
  const handleCloseSidebar = () => setIsOpen(false);
  const handleToggleSidebar = () => setIsOpen(!isOpen);

  const buttonPlacement = useMemo(() => {
    return isOpen ? 'justify-end' : 'justify-center'
  }, [isOpen])

  const widgets: Array<JSX.Element> = [
    <WidgetContainer
      key={'weather'}
      type='weather'
      widget={<Weather />}
    />,
    <WidgetContainer
      key={'calendar'}
      type='calendar'
      widget={<Calendar />}
    />,
    <WidgetContainer
      key={'todo'}
      type='todo'
      widget={<Todo />}
    />,
    <WidgetContainer
      key={'transport'}
      type='transport'
      widget={<Transport />}
    />,
  ]

  const pageOptionPlacement = useMemo(() => {
    return isOpen ? 'justify-start' : 'justify-center'
  }, [isOpen])
  console.log(pageOptionPlacement)
  return (


    <div className="relative h-screen w-full flex">
      {/* Sidebar */}
      <div className={`fixed p-2 top-0 h-screen z-50 shadow-lg transition-all ease-in-out duration-500 ${isOpen ? 'w-64' : 'w-16'} bg-white`}>
        <div className={`flex ${pageOptionPlacement}`}>
          <button onClick={handleToggleSidebar} className="btn btn-neutral ">
            <FontAwesomeIcon size='lg' icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className={`flex flex-col p-2`}>
          <button
            onClick={() => setSelectedWidget(null)}
            className={`flex items-center p-1 my-2 btn btn-ghost ${pageOptionPlacement}`}>
            <FontAwesomeIcon className={`${isOpen ? 'mr-2' : ''}`} icon={faHome} />
            <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Home</p>
          </button>
          <button
            onClick={() => setSelectedWidget('weather')}
            className={`flex items-center p-1 my-2 btn btn-ghost ${pageOptionPlacement}`}>
            <FontAwesomeIcon className={`${isOpen ? 'mr-2' : ''}`} icon={faCloud} />
            <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Weather</p>
          </button>

          <button
            onClick={() => setSelectedWidget('calendar')}
            className={`flex items-center p-1 my-2 btn btn-ghost ${pageOptionPlacement}`}>
            <FontAwesomeIcon className={`${isOpen ? 'mr-2' : ''}`} icon={faCalendar} />
            <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Calendar</p>
          </button>

          <button
            onClick={() => setSelectedWidget('todo')}
            className={`flex items-center p-1 my-2 btn btn-ghost ${pageOptionPlacement}`}>
            <FontAwesomeIcon className={`${isOpen ? 'mr-2' : ''}`} icon={faListAlt} />
            <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Todos</p>
          </button>

          <button
            onClick={() => setSelectedWidget('transport')}
            className={`flex items-center p-1 btn btn-ghost my-2 ${pageOptionPlacement}`}>
            <FontAwesomeIcon className={`${isOpen ? 'mr-2' : ''}`} icon={faSubway} />
            <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Transport</p>
          </button>
        </ul>
      </div>
      {/* Page content */}
      <div className="flex-grow box-content p-4 ml-16 bg-gray-200">
        <div className={`grid ${selectedWidget === null ? 'grid-cols-2 grid-rows-2' : 'grid-cols-1 grid-rows-1'} gap-4 w-full h-full`}>
          {selectedWidget === null
            ? widgets
            : widgets.filter(widget => widget.key === selectedWidget)}
        </div>

      </div>
    </div>
  );
}