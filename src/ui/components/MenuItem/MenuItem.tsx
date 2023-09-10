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
                className={`my-2 btn btn-block ${isMenuOpen ? 'justify-start' : 'justify-center'}`}>
                {icon}
                <p className="">
                    {text}
                </p>
            </button>
        </li>
    )
}