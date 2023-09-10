import WidgetContainer from '../../WidgetContainer/WidgetContainer';
import { useState } from 'react';
import { Calendar, dayjsLocalizer, Event, SlotInfo } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';


interface MyEvent extends Event {
    allDay?: boolean;
    desc?: string;
  }
const CalendarWidget = () => {
    const [events, setEvents] = useState<MyEvent[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [eventTitle, setEventTitle] = useState('');

    const handleSlotSelection = (slotInfo: SlotInfo) => {
        setSelectedDate(slotInfo.start);
        setIsModalOpen(true);
    };

    const handleEventAdd = () => {
        if (eventTitle && selectedDate) {
            setEvents([
                ...events,
                {
                    title: eventTitle,
                    start: selectedDate,
                    end: selectedDate,
                    allDay: true
                }
            ]);
            setIsModalOpen(false);
            setEventTitle('');
        }
    };

    const localizer = dayjsLocalizer(dayjs)
    return (
        <WidgetContainer>
            <div style={{ height: '600px', maxHeight: '500px' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectSlot={handleSlotSelection}
                    style={{ height: '600px' }}
                />
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Event Modal"
            >
                <h2>Add Event</h2>
                <input
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Event Title"
                />
                <button onClick={handleEventAdd}>Add Event</button>
            </Modal>
        </WidgetContainer>
    );

};
export default CalendarWidget;
