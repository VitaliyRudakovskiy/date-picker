import styled, { DefaultTheme } from "styled-components";

const borderRadius = ({ theme }: DefaultTheme) => theme.gaps.s

export const ButtonWrapper = styled.button`
    font-family: ${({theme}) => theme.fonts.fontFamily.openSans};
    font-size: ${({theme}) => theme.fonts.fontSize.s};
    font-weight: ${({theme}) => theme.fonts.fontWeight.m};
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    border-radius: 0 0 ${borderRadius} ${borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({theme}) => theme.gaps.m} 0;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.middleDayRange};
    }
`;