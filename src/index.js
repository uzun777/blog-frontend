import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const theme = createTheme({
    typography: {
        fontFamily: ['Cormorant Garamond', 'Open Sans'],
        h1: {fontFamily: 'Cormorant Garamond'},
        h2: {fontFamily: 'Cormorant Garamond'},
        h3: {fontFamily: 'Cormorant Garamond'},
        h4: {fontFamily: 'Cormorant Garamond'},
    },
    palette: {
        primary: {
            main: '#000',
            light: '#949799'
        },
        secondary: {
            main: "#fff"
        }
    },
});

root.render(<React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
</React.StrictMode>);
