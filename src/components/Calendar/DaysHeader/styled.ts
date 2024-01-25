import styled from 'styled-components';

export const DaysOfWeekWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, ${({ theme }) => theme.sizes.cellSize});
`;
