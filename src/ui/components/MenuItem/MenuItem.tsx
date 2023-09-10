import { useDashboardContext } from "../../../Contexts/DashBoardContext"


interface MenuItemProps {
    icon: JSX.Element
    text?: string | undefined
    handleSelection?: () => string
}

export default function MenuItem({ icon, text, handleSelection }: MenuItemProps) {
    const { isMenuOpen } = useDashboardContext();
    return (
        <li>
            <button
                onClick={() => handleSelection}
                className={`mb-2 btn btn-block content-center ${isMenuOpen ? 'justify-start' : 'justify-center'}`}>
                <div className="mt-1">
                    {icon}
                </div>

                <p className="">
                    {text}
                </p>
            </button>
        </li>
    )
}