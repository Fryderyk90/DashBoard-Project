import { useState } from "react";
import Clock from "./Clock";
import Event from "./Event";


export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date).replace(/\//g, '-');
}
export default function Calendar() {
    const [date] = useState(new Date());


    const events = [
        <Event title={'Test event'} />,
        <Event title={'Test event'} description={'test description'} />,
        <Event title={'Test event'} date={formatDate(date)} />,
        <Event title={'Test event'} date={formatDate(date)} startTime="16:00" endTime="17:00" />,
        <Event title={'Test event'} description="test description" date={formatDate(date)} startTime="16:00" endTime="17:00" />,
    ]

    return (
        <div className="box-content h-full">
            <div className="flex flex-row justify-between">
                <h1 className="font-semibold">{formatDate(date)}</h1>
                <h1 className="font-semibold text-xl">{date.toLocaleString('default', { month: 'long' })}</h1>
                <Clock />
            </div>
            <div className="h-full  border">
                {events.map(event => event)}
            </div>
        </div>
    )
}