import { useDashboardContext } from '../../../Contexts/DashBoardContext';

export default function WidgetGrid() {
    const maxColumns = 2;
    const { widgets, selectedWidget } = useDashboardContext()
    return (
        <div className={`grid grid-cols-2 w-full p-2 gap-2  bg-base-300`}>
            {selectedWidget === null
                ? widgets.map(w => w)
                : widgets.filter(widget => widget.key === selectedWidget)}
        </div>
    )
}