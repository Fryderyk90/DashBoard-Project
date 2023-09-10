import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDashboardContext } from "../../../Contexts/DashBoardContext";

export default function MenuDrawer() {
  const { isMenuOpen, HandleMenu, menuItems, } = useDashboardContext();

  return (
    <>
      {/* MENU */}
      <div className={`border px-2 h-screen ${isMenuOpen ? " w-48" : "w-16"}`} >
        <div className='flex flex-col justify-center'>
          <button
            className="flex items-center p-1 my-2 btn drawer-button"
            onClick={() => HandleMenu(!isMenuOpen)}
          >
            <FontAwesomeIcon size='lg' icon={isMenuOpen ? faTimes : faBars} />
          </button>
          {/* MENU OPTIONS */}
          {menuItems}
          {/* MENU OPTIONS */}
        </div>
      </div>
      {/* MENU */}
    </ >
  );
}