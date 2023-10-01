import { Event } from "react-big-calendar"

export type WidgetType = 'weather' | 'calendar' | 'todo' | 'transport' | 'home'

export type personColor = 'red' | 'blue';
export type person = 'Fredrik'| 'Susanna'


export interface User {
    name?: person | undefined
    email?: string
}
export interface CustomEvent extends Event {
    description?: string;
    user?: User;
    style:EventStyles;
}


export interface EventStyles {
    backgroundColor?: personColor;
    color?: string;
}



