import styled from 'styled-components';

import { flexBetween } from '@/theme/style/presets';

export const MonthSliderWrapper = styled.div`
    width: 100%;
    ${flexBetween};
    padding: ${({ theme }) => theme.gaps.m} 0;

    & svg:hover {
        cursor: pointer;
    }
`;

export const MonthNameContainer = styled.h3`
    font-family: ${({ theme }) => theme.fonts.fontFamily.openSans};
    font-size: ${({ theme }) => theme.fonts.fontSize.m}px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
    color: ${({ theme }) => theme.colors.month};
    cursor: pointer;
`;

export const MonthName = styled.span`
    &:hover {
        color: ${({ theme }) => theme.colors.chosenDay};
    }
`;

export const Year = styled.span`
    &:hover {
        color: ${({ theme }) => theme.colors.chosenDay};
    }
`;

export const MonthSliderIcon = styled.img`
    color: ${({ theme }) => theme.colors.month};
    cursor: pointer;
`;
