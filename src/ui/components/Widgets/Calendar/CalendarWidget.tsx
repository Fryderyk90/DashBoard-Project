import WidgetContainer from '../../WidgetContainer/WidgetContainer';
import { Calendar as BigCalendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import EventForm from './EventForm';
import { useCallback, useState } from 'react';

type person = "Fredrik" | "Susanna"
type color = "red" | "blue"
type personColor = {
    person: person
    color: color
}
export interface CustomEvent extends Event {
    allDay?: boolean | undefined;
    title?: React.ReactNode | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    resource?: any;
    personColor?: personColor
}

const events = [
    {
        start: moment('2023-09-10T10:00:00').toDate(),
        end: moment('2023-09-13T10:00:00').toDate(),
        title: 'TEST EVENT',
    }
]
const localizer = momentLocalizer(moment)
const CalendarWidget = (props: Omit<CalendarProps, 'localizer'>) => {
    const [isEventFormOpen, setIsEventFormOpen] = useState<boolean>(false)
    const [event, setEvent] = useState<CustomEvent | undefined>(undefined)
    const updateIsOpen = useCallback((status: boolean) => {
        setIsEventFormOpen(status);
    }, []);
    return (
        <WidgetContainer>
            {isEventFormOpen && <EventForm
                open={isEventFormOpen}
                onToggle={updateIsOpen}
                event={event as CustomEvent}
                title={event?.title ? event.title.toString() : 'Create Event'}
            />}
            <BigCalendar
                style={{ height: '437px', maxHeight: '437px' }}
                selectable
                onSelectEvent={(event) => {
                    console.log('selectedEvent', event)
                    console.log('EventFormOpen', isEventFormOpen)
                    updateIsOpen(true)
                    setEvent(event as CustomEvent)
                    return <EventForm
                        open={isEventFormOpen}
                        onToggle={updateIsOpen}
                        event={event as CustomEvent | undefined}
                        title={event?.title ? event.title.toString() : 'Create Event'}
                    />
                }}
                onSelectSlot={(event) => {
                    console.log('selectedSlot', event)
                    console.log('EventFormOpen', isEventFormOpen)
                    updateIsOpen(true)
                    setEvent({ start: event.start, end: event.end } as CustomEvent)
                    return <EventForm
                        open={isEventFormOpen}
                        onToggle={updateIsOpen}
                        event={{ start: event.start, end: event.end } as CustomEvent | undefined}
                        title={'Create Event'}
                    />
                }}
                localizer={localizer}
                events={events}
                views={['week', 'month']}
                {...props}
            />
        </WidgetContainer>
    );

};
export default CalendarWidget;
