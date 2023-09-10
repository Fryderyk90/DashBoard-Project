
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDashboardContext } from '../../Contexts/DashBoardContext'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import WidgetGrid from '../components/WidgetGrid/WidgetGrid'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer';

export default function Dashboard() {

    //TodoContext
    //TransportContext

    return (
        <div className='flex'>
            <MenuDrawer />
            <WidgetGrid />
        </div>
    )
}
