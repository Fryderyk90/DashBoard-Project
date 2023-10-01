import { Event, SlotInfo } from 'react-big-calendar';
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import { CustomEvent, User } from '../../../../types';
import { useMemo } from 'react';


interface EventFormProps {
    title: string;
    event?: CustomEvent;
    open: boolean;
    onToggle: (status: boolean) => void;
    selectedSlot?: SlotInfo | null;
}

interface EventFormValues {
    eventName: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    allDay: boolean;
    person?: User
}

export default function EventForm({ selectedSlot, event, onToggle, open, title }: EventFormProps) {
    console.log('Selected slot', selectedSlot)
    console.log('EVENTFORM', open)



    const initialValues: EventFormValues =
    {
        eventName: event?.title as string || '',
        description: event?.description || '',
        startDate: event?.start || selectedSlot?.start || new Date(),
        endDate: event?.end || selectedSlot?.end || new Date(),
        allDay: event?.allDay || false,
        person: event?.user || undefined
    }



    const handleSubmit = (values: EventFormValues) => {
        console.log('sending values:', values);
    };


    const validationSchema = Yup.object({
        eventName: Yup.string().required('Event Name is required'),
        startDate: Yup.date().required('Start Date is required'),
        endDate: Yup.date().required('End Date is required').min(Yup.ref('startDate'), "End date can't be before start date"),
    });
    return (
        <dialog id="my_modal_1" open={true} className="modal">
            <div className="modal-box">
                <h2 className='font-bold mb-3'>{title}</h2>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ values }) => (
                        <Form>
                            <div className='form-control'>
                                <div className='join join-vertical'>
                                    <div className='join-item my-2'>
                                        <label className='font-bold'>User:</label>
                                        <div className='flex'>

                                            <Field
                                                className={`input input-bordered w-full`}
                                                name="User"
                                                as='select'
                                                value={values.person?.name}
                                                placeholder={"Enter an event name"}
                                            >
                                                <option value="Fredrik">
                                                    <div>
                                                        <p>Fredrik</p>
                                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                                    </div>
                                                </option>
                                                <option value="Susanna">
                                                    <div>
                                                        <p>Susanna</p>
                                                        <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
                                                    </div>

                                                </option>
                                            </Field>

                                            <ErrorMessage className={"font-bold text-error"} name="eventName" />
                                        </div>
                                        <label className='font-bold'>Event Name:</label>
                                        <Field
                                            className={`input input-bordered w-full`}
                                            name="eventName"
                                            type="text"
                                            placeholder={"Enter an event name"}
                                        />
                                        <ErrorMessage className={"font-bold text-error"} name="eventName" />
                                    </div>
                                    <div className='join-item my-2'>

                                        <label className='font-bold'>Description:</label>
                                        <Field
                                            className={`input input-bordered w-full`}
                                            name="description"
                                            type="text"
                                            placeholder={"Enter a description"}
                                        />
                                        <ErrorMessage name="description" />
                                    </div>
                                    <div className='join-item my-2 justify-end'>
                                        <label className='font-bold mr-2'>All Day:</label>
                                        <Field name="allDay" checked={values.allDay} type="checkbox" />
                                    </div>
                                </div>
                                <div className='join-horizontal flex flex-row justify-between my-2'>
                                    <div className='join-item'>

                                        <label className='font-bold mr-2'>Start:</label>
                                        <Field
                                            className={`input input-bordered`}
                                            disabled={values.allDay}
                                            name="startDate"
                                            type="date"
                                            value={values?.startDate?.toLocaleDateString()}
                                        />
                                        <ErrorMessage name="startDate" />
                                    </div>
                                    <div className='join-item'>
                                        <label className='font-bold mr-2'>End:</label>
                                        <Field
                                            className={`input input-bordered`}
                                            disabled={values.allDay}
                                            name="endDate"
                                            type="date"
                                            value={values?.endDate?.toLocaleDateString()}
                                        />
                                        <ErrorMessage name="endDate" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mt-5'>
                                <div>

                                    <button onClick={() => onToggle(false)} className="btn btn-secondary mr-4">Close</button>
                                    <button onClick={() => handleSubmit(values)} className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </Form>)
                    }
                </Formik >

            </div >
        </dialog >
    )
}