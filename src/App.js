import React from 'react';
import {createTheme} from '@mui/material';
import {ThemeProvider} from '@mui/styles';
import Header from './components/Header/Header.jsx'
export default function Root () {
const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
            <Header/>
        </ThemeProvider>
 )}
