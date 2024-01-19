import styled, { DefaultTheme } from 'styled-components';

const cell = ({ theme }: DefaultTheme) => theme.sizes.cellSize;

export const DaysOfWeekWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, ${cell});
`;


