import React from 'react';

import { ButtonWrapper } from './styled';
import { IButtonProps } from './types';

const Button = React.memo(({ text, onButtonClick }: IButtonProps) => {
    return <ButtonWrapper onClick={onButtonClick}>{text}</ButtonWrapper>;
});

export default Button;
