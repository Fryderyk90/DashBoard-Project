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
