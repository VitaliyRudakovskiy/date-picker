import React from 'react';

import DayOfWeekContainer from './styled';
import { IDay } from './types';

const DayOfWeek = ({day}: IDay) => {
  return (
    <DayOfWeekContainer>
      {day}
    </DayOfWeekContainer>
  )
}

export default DayOfWeek;
