import { widgetType } from "../MenuDrawer/NavBar"

interface widgetProps {
    type: widgetType
    widget: JSX.Element
}

export default function WidgetContainer(props: widgetProps) {
    return (
        <div key={props.type} className=" bg-base-100 p-4 w-full h-full ">
            {props.widget}
        </div>
    )
}