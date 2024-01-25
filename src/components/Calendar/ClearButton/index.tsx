import React from 'react';
import { IButtonProps } from './types';
import { ButtonWrapper } from './styled';

const ClearButton = React.memo(({ onButtonClick }: IButtonProps) => {
    return <ButtonWrapper onClick={onButtonClick}>Clear Interval</ButtonWrapper>;
});

export default ClearButton;
