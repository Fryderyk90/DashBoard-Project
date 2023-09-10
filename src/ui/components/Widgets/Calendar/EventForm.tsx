import { Event } from 'react-big-calendar'
import { CustomEvent } from './CalendarWidget'


interface EventFormProps {
    event: CustomEvent | undefined
    open: boolean
    onToggle: (status: boolean) => void;
}

export default function EventForm({ event, onToggle, open }: EventFormProps) {
    console.log('EVENTFORM', open)
    return (
        <dialog id="my_modal_1" open={true} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                {event?.title && <p className='font-bold'>Title:  {event?.title}</p>}
                <p>Start:  {event?.start?.toDateString()}</p>
                <p>End:  {event?.end?.toDateString()}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={() => onToggle(false)} className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}