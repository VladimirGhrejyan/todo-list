import React from 'react';
import ReactDOM from 'react-dom/client';
// app
import App from '~app/app.tsx';
import { ErrorBoundary } from '~app/providers/error-boundary';
import { ThemeProvider } from '~app/providers/theme';
import { StoreProvider } from '~app/providers/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    </React.StrictMode>,
);
