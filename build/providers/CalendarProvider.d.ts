import React from 'react';
import { ICalendarContext, IProviderProps } from './types';
export declare const useCalendar: () => ICalendarContext;
declare const CalendarProvider: ({ children }: IProviderProps) => React.JSX.Element;
export default CalendarProvider;
