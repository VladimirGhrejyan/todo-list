import { FC, ReactNode } from 'react';
import { ThemeProvider as ReactThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from '../lib/theme';

type TProps = {
    children: ReactNode;
};

export const ThemeProvider: FC<TProps> = ({ children }) => {
    return (
        <ReactThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ReactThemeProvider>
    );
};
