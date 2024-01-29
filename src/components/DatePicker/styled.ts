import { flexCenter } from '@constants/style/presets';
import styled, { DefaultTheme } from 'styled-components';

const gapS = ({ theme }: DefaultTheme) => theme.gaps.s;

export const DatePickerWrapper = styled.section`
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.sizes.calendarWidth};
`;

export const DatePickerHeader = styled.div`
    ${flexCenter};
    padding: ${gapS} ${({ theme }) => theme.gaps.xm};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${gapS};
    gap: ${gapS};
    margin: ${gapS} auto;
`;

export const DateLabelContainer = styled.div``;

export const ErrorText = styled.p`
    font-size: 12px;
    color: red;
`;
