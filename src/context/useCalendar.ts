import { useContext } from 'react';

import CalendarContext from './CalendarContext';

const useCalendar = () => {
    return useContext(CalendarContext);
};

export default useCalendar;
