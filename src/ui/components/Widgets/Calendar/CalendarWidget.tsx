import WidgetContainer from '../../WidgetContainer/WidgetContainer';
import { Calendar as BigCalendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


// interface MyEvent extends Event {
//     allDay?: boolean | undefined;
//     title?: React.ReactNode | undefined;
//     start?: Date | undefined;
//     end?: Date | undefined;
//     resource?: any;
// }

const events = [
    {
        start: moment('2023-09-10T10:00:00').toDate(),
        end: moment('2023-09-10T10:00:00').toDate(),
        title: 'TEST EVENT',
    }
]

const localizer = momentLocalizer(moment)
const CalendarWidget = (props: Omit<CalendarProps, 'localizer'>) => {

    return (
        <WidgetContainer>
            <div style={{ height: '50vh' }}>
                <BigCalendar
                    localizer={localizer}
                    events={events}
                    view={'week'}
                    views={['week']}
                    toolbar={false}
                    {...props}
                />
            </div>
        </WidgetContainer>
    );

};
export default CalendarWidget;
