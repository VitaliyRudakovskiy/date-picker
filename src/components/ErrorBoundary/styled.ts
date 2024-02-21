import styled, { DefaultTheme } from 'styled-components';

import { flexCenter } from '@/theme/style/presets';

const errorColor = ({ theme }: DefaultTheme) => theme.colors.errorText;
const textXXL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.xxl;
const textL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.l;
const textS = ({ theme }: DefaultTheme) => theme.fonts.fontSize.s;
const rem1 = ({ theme }: DefaultTheme) => theme.gaps.l;
const tablet = ({ theme }: DefaultTheme) => theme.sizes.tablet;

export const ErrorBoundaryWrapper = styled.div`
    max-width: 100vw;
    min-height: 90vh;
    ${flexCenter};
    flex-direction: column;
    gap: ${rem1};
    padding: 0 ${rem1};
    text-align: center;
`;

export const Error = styled.p`
    color: ${errorColor};
    font-size: ${textXXL}px;
`;

export const ErrorInfoText = styled.span`
    font-size: ${textL}px;

    @media (max-width: ${tablet}) {
        font-size: ${textS}px;
    }
`;
