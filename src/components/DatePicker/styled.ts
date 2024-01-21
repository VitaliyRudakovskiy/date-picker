import { flexCenter } from '@constants/style/presets';
import styled, { DefaultTheme } from 'styled-components';

const calendarWidth = ({ theme }: DefaultTheme) => theme.sizes.calendarWidth;
const gapS = ({ theme }: DefaultTheme) => theme.gaps.s;
const gapXM = ({ theme }: DefaultTheme) => theme.gaps.xm;
const borderColor = ({ theme }: DefaultTheme) => theme.colors.border;

export const DatePickerWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${gapS};
    max-width: ${calendarWidth};
`;

export const DatePickerHeader = styled.div`
    ${flexCenter};
    padding: ${gapS} ${gapXM};
    border: 1px solid ${borderColor};
    border-radius: ${gapS};
    gap: ${gapS};
`;
export const DateLabelContainer = styled.div``;

export const ErrorText = styled.p`
    font-size: 12px;
    color: red;
`;
