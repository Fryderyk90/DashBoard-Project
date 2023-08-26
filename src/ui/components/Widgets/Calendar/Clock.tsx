import { useEffect, useState } from "react";

export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    return <h2 className=" font-semibold">{date.toLocaleTimeString()}</h2>;

}