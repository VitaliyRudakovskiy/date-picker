import styled from 'styled-components';

const DayOfWeekContainer = styled.span`
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.fontSize.m}px;
    font-weight: ${({ theme }) => theme.fonts.fontWeight.l};
    padding: ${({ theme }) => theme.gaps.s} 6px;
`;

export default DayOfWeekContainer;
