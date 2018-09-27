import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#74ac02',
            main: '#a6f704',
            dark: '#b7f836',
            contrastText: '#000',
        },
        secondary: {
            light: '#b28900',
            main: '#ffc400',
            dark: '#ffcf33',
            contrastText: '#000',
        },
    },
});

ReactDOM.render((
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    ),
    document.getElementById('root')
);

registerServiceWorker();
