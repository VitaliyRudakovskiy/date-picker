import { Dispatch, SetStateAction } from 'react';
declare const changeYear: (
    to: 'next' | 'prev',
    selectedYear: number,
    setSelectedYear: Dispatch<SetStateAction<number>>,
) => void;
export default changeYear;
