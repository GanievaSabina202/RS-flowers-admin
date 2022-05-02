import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import styled from 'styled-components';
import { Grid, Container } from '@mui/material';

import { theme } from '../assets/style/theme'
import { ThemeProvider } from "styled-components";
import Sidebar from '../components/Sidebar/Sidebar';

export const AppProvider = ({ children }) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl">
                    <Grid container spacing={1}>
                        <Grid
                            lg={2}
                            md={2}
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Sidebar />
                        </Grid>
                        <Grid
                            lg={10}
                            md={10}
                        >
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
}
