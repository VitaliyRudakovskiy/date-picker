import React from 'react';
import next from '@assets/next.svg';
import prev from '@assets/prev.svg';

import { MonthName, MonthSliderIcon, MonthSliderWrapper } from './styled';

const MonthSlider = () => {
    return (
        <MonthSliderWrapper>
            <MonthSliderIcon src={prev} alt="prevWeek" />
            <MonthName>Anycember 2025</MonthName>
            <MonthSliderIcon src={next} alt="nextWeek" />
        </MonthSliderWrapper>
    );
};

export default MonthSlider;
