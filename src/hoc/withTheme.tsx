import React, { ComponentType, FC } from 'react';
import GlobalStyle from '@constants/style/globalStyles';
import THEME from '@constants/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const withTheme =
    <P extends object>(Component: ComponentType<P>): FC<P> =>
    (props: P) => (
        <StyledThemeProvider theme={THEME}>
            <GlobalStyle />
            <Component {...props} />
        </StyledThemeProvider>
    );

export default withTheme;
