import WidgetContainer from '../../WidgetContainer/WidgetContainer';
import { Calendar as BigCalendar, CalendarProps, momentLocalizer, Event, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import EventForm from './EventForm';
import { useCallback, useMemo, useState } from 'react';
import { CustomEvent, person, personColor } from '../../../../types';
const localizer = momentLocalizer(moment)



const CalendarWidget = (props: Omit<CalendarProps<CustomEvent>, 'localizer'>) => {
    const [events, setEvents] = useState<Array<CustomEvent>>([
        {
            title: 'Event 1',
            start: new Date(2023, 9, 1, 10, 0), // October 1, 2023, 10:00 AM
            end: new Date(2023, 9, 1, 12, 0), // October 1, 2023, 12:00 PM
            description: 'This is a test description',
            user: { name: 'Fredrik' },
            style: { backgroundColor: 'blue' },
            allDay: false,
        },
        {
            title: 'Event 2',
            start: new Date(2023, 9, 2, 14, 0), // October 2, 2023, 2:00 PM
            end: new Date(2023, 9, 5, 16, 0), // October 2, 2023, 4:00 PM
            description: 'This is a test description',
            user: { name: 'Fredrik' },
            allDay: true,
            style: { backgroundColor: 'blue' }

        },
        {
            title: 'Event 3',
            start: new Date(2023, 9, 3, 9, 0), // October 3, 2023, 9:00 AM
            end: new Date(2023, 9, 3, 11, 0), // Otober 3, 2023, 11:00 AM
            description: 'This is a test description',
            user: { name: 'Susanna' },
            style: { backgroundColor: 'red' },
            allDay: false,
        }
    ]);
    const [selectedEvent, setSelectedEvent] = useState<CustomEvent>();
    const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);
    const [isEventFormOpen, setIsEventFormOpen] = useState<boolean>(false)
    const updateIsOpen = useCallback((status: boolean) => {
        setIsEventFormOpen(status);
    }, []);

    const handleSelectSlot = (slotInfo: SlotInfo) => {
        setSelectedSlot(slotInfo);
        setIsEventFormOpen(true);
    };

    const handleEvent = (eventInfo: CustomEvent) => {
        setSelectedEvent(eventInfo);
        setIsEventFormOpen(true);
    };
    const eventStyleGetter = (event: CustomEvent) => {
        const backgroundColor = event.style?.backgroundColor;
        return {
            style: {
                backgroundColor,
            }
        };
    };
    return (
        <WidgetContainer>
            {isEventFormOpen &&
                <EventForm
                    open={isEventFormOpen as boolean}
                    onToggle={updateIsOpen}
                    event={selectedEvent}
                    title={selectedEvent ? 'Edit event' : 'Create Event'}
                    selectedSlot={selectedSlot}

                />}
            <BigCalendar

                style={{ height: '437px', maxHeight: '437px' }}
                selectable
                onSelectEvent={handleEvent}
                onSelectSlot={handleSelectSlot}
                localizer={localizer}
                events={events}
                views={['week', 'month']}
                eventPropGetter={eventStyleGetter}
                {...props}
            />
        </WidgetContainer>
    );

};
export default CalendarWidget;
