import React, { ComponentType, FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '@/theme/style/globalStyles';
import THEME from '@/theme/theme';

const withTheme =
    <P extends object>(Component: ComponentType<P>): FC<P> =>
    (props: P) => (
        <StyledThemeProvider theme={THEME}>
            <GlobalStyle />
            <Component {...props} />
        </StyledThemeProvider>
    );

export default withTheme;
