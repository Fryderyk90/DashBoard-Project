import { CustomEvent } from './CalendarWidget'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface EventFormProps {
    title: string
    event: CustomEvent | undefined
    open: boolean
    onToggle: (status: boolean) => void;
}

interface EventFormValues {
    eventName: string;
    description: string;
    startDate: Date | null;
    endDate: Date | null;
    allDay: boolean;
}

export default function EventForm({ event, onToggle, open, title }: EventFormProps) {
    console.log('EVENTFORM', open)
    const initialValues: EventFormValues = {
        eventName: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        allDay: false
    };

    const validationSchema = Yup.object({
        eventName: Yup.string().required('Event Name is required'),
        description: Yup.string().required('Description is required'),
        startDate: Yup.date().required('Start Date is required'),
        endDate: Yup.date().required('End Date is required').min(Yup.ref('startDate'), "End date can't be before start date"),
    });
    return (
        <dialog id="my_modal_1" open={true} className="modal">
            <div className="modal-box">
                <h3 className='font-bold'>{title}</h3>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ values }) => (<Form>
                        <div className='form-control'>
                            <div className='join join-vertical'>
                                <div className='join-item my-2'>
                                    <label className='font-bold'>Event Name:</label>
                                    <Field className={`input input-bordered w-full`} name="eventName" type="text" />
                                    <ErrorMessage name="eventName" />
                                </div>
                                <div className='join-item my-2'>

                                    <label className='font-bold'>Description:</label>
                                    <Field className={`input input-bordered w-full`} name="description" type="text" />
                                    <ErrorMessage name="description" />
                                </div>
                                <div className='join-item my-2 justify-end'>
                                    <label className='font-bold mr-2'>All Day:</label>
                                    <Field name="allDay" type="checkbox" />
                                </div>
                            </div>
                            <div className='join-horizontal flex flex-row justify-between my-2'>
                                <div className='join-item'>

                                    <label className='font-bold mr-2'>Start:</label>
                                    <Field className={`input input-bordered`} disabled={values.allDay} name="startDate" type="date" />
                                    <ErrorMessage name="startDate" />
                                </div>
                                <div className='join-item'>
                                    <label className='font-bold mr-2'>End:</label>
                                    <Field className={`input input-bordered`} disabled={values.allDay} name="endDate" type="date" />
                                    <ErrorMessage name="endDate" />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <div>

                                <button onClick={() => onToggle(false)} className="btn mr-4">Close</button>
                                <button onClick={() => onToggle(false)} className="btn">Add</button>
                            </div>
                        </div>
                    </Form>)
                    }
                </Formik >

            </div >
        </dialog >
    )
}