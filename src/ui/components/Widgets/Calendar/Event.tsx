interface eventProps {
    date?: string
    startTime?: string
    endTime?: string
    title: string
    description?: string
}

export default function Event(props: eventProps) {
    return (
        <div className="border shadow-sm flex justify-between">
            <div>
                <p className="pb-1">{props.title}</p>
                {props.description ?? <p>{props.description}</p>}
            </div>
            <div>
                {props.date ?? <p>{props.date}</p>}
                <div className="flex flex-row pb-1">
                    {props.startTime && <p>{props.startTime}-{props.endTime}</p> }
                </div>
            </div>
        </div>
    )
}