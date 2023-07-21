import { useMemo, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faCloud, faCalendar, faListAlt, faSubway } from '@fortawesome/free-solid-svg-icons';
export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenSidebar = () => setIsOpen(true);
  const handleCloseSidebar = () => setIsOpen(false);
  const handleToggleSidebar = () => setIsOpen(!isOpen);

  const buttonPlacement = useMemo(() => {
    return isOpen ? 'justify-end' : 'justify-center'
  }, [isOpen])

  const pageOptionPlacement = useMemo(() => {
    return isOpen ? 'justify-start' : 'justify-center'
  }, [isOpen])
  console.log(pageOptionPlacement)
  return (


<div className="relative h-screen w-full flex">
  {/* Sidebar */}
  <div className={`fixed top-0 h-screen z-50 shadow-lg transition-all ease-in-out duration-500 ${isOpen ? 'w-64' : 'w-16'} bg-white`}>
    <div className={`flex ${isOpen ? 'justify-start' : 'justify-center'} p-2`}>
      <button onClick={handleToggleSidebar} className="btn btn-neutral ">
        <FontAwesomeIcon size='lg' icon={isOpen ? faTimes : faBars} />
      </button>
    </div>

    {/* Menu Items */}
    <ul className={`flex flex-col pt-2  ${isOpen ? 'justify-start' : 'justify-center'}`}>
      <button className={`flex items-center my-2 ${isOpen ? 'justify-start' : 'justify-center'}`}>
        <FontAwesomeIcon className="mr-2" icon={faCloud} />
        <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Weather</p>
      </button>
      <button className={`flex items-center my-2 ${isOpen ? 'justify-start' : 'justify-center'}`}>
        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
        <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Calendar</p>
      </button>

      <button className={`flex items-center my-2 ${isOpen ? 'justify-start' : 'justify-center'}`}>
        <FontAwesomeIcon className="mr-2" icon={faListAlt} />
        <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Todos</p>
      </button>
      <button className={`flex items-center my-2 ${isOpen ? 'justify-start' : 'justify-center'}`}>
        <FontAwesomeIcon className="mr-2" icon={faSubway} />
        <p className={`${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all duration-500 overflow-hidden`}>Transport</p>
      </button>
    </ul>
  </div>

  {/* Page content */}
  <div className="flex-grow ml-16 bg-gray-200">
    {/* Your page content here */}
  </div>
</div>
  );
}