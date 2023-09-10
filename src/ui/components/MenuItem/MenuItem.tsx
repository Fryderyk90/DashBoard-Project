import { useDashboardContext } from "../../../Contexts/DashBoardContext"
import { WidgetType } from "../../../types";


interface MenuItemProps {
    icon: JSX.Element
    text?: string | undefined
    handleSelection?: (widget: WidgetType) => void
}

export default function MenuItem({ icon, text, handleSelection }: MenuItemProps) {
    const { isMenuOpen } = useDashboardContext();
    
    return (
        <li>
            <button
                onClick={() => handleSelection}
                className={`mb-2 btn btn-block ${isMenuOpen ? 'justify-start' : 'justify-center'}`}>
                <div className={`${isMenuOpen ? 'my-1' : 'mt-3'}`}>
                    {icon}
                </div>

                <p className="normal-case">
                    {text}
                </p>
            </button>
        </li>
    )
}