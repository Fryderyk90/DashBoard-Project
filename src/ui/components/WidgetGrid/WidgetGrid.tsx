import { useDashboardContext } from '../../../Contexts/DashBoardContext';
import { WidgetType } from '../../../types';

export default function WidgetGrid() {
    //const maxColumns = 2;
    const { widgets, selectedWidget, maxColumns } = useDashboardContext()
    console.log(maxColumns)
    console.log(selectedWidget)
    console.log(widgets.filter(widget => widget.key as WidgetType == selectedWidget))
    return (
        <div className={`grid grid-cols-2 grid-rows-2 w-full p-2 gap-2 bg-base-300`}>


            {selectedWidget === null
                ? widgets
                    .map((w) => w)
                : widgets
                    .filter(widget => widget.key as WidgetType == selectedWidget)
                    .map((w) => w)}

        </div>
    )
}