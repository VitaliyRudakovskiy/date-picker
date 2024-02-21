import { Dispatch, SetStateAction } from 'react';

const changeYear = (
    to: 'next' | 'prev',
    selectedYear: number,
    setSelectedYear: Dispatch<SetStateAction<number>>,
) => {
    setSelectedYear(to === 'next' ? selectedYear + 20 : selectedYear - 20);
};

export default changeYear;
