import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Grid, Container } from "@mui/material";

import { theme } from "../assets/style/theme";
import { ThemeProvider } from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import Login from "../pages/Login/Login";

export const AppProvider = ({ children }) => {
  const { user } = useAuth0();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {!user && <Login />}
        {user && (
          <Container maxWidth="xl">
            <Grid container spacing={1}>
              <Grid lg={2} md={2}>
                <Sidebar />
              </Grid>
              <Grid lg={10} md={10}>
                {children}
              </Grid>
            </Grid>
          </Container>
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
};
