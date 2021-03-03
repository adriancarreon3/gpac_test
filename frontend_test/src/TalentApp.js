import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme.config';

import { generateStore } from './store/store';

export const TalentApp = () => {

    const store = generateStore();

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    )
}
