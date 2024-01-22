import styled from 'styled-components';

export const DaysGridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const MonthsGridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const YearsGridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;