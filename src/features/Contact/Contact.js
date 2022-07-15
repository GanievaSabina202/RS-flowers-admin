import React from "react";
import PageDesc from "../../components/PageDesc/PageDesc";
import { Grid } from "@mui/material";
import { Ul, Li, Span } from "./Contact.styled";

function Contact() {
  return (
    <>
      <PageDesc title="Contact Page" />

      <Grid container>
        {/* {users &&
          users.map((item) => ( */}
        <Grid lg={4} md={6} xs={12}>
          <Ul>
            <Li>
              <Span>Name: </Span>
              Sabina
            </Li>
            <Li>
              <Span>Email: </Span>
              ganievasabina202@gmail
            </Li>
            <Li>
              <Span>Text: </Span>
              Lorem ipsum sit domenvvv Lorem ipsum sit domenvvv Lorem ipsum sit
              dvv Lorem ipsum sit domenvvv
            </Li>
          </Ul>
        </Grid>

        <Grid lg={4} md={6} xs={12}>
          <Ul>
            <Li>
              <Span>Name: </Span>
              Sabina
            </Li>
            <Li>
              <Span>Email: </Span>
              ganievasabina202@gmail
            </Li>
            <Li>
              <Span>Text: </Span>
              Lorem ipsum sit domenvvv Lorem ipsum sit domenvvv Lorem ipsum sit
              dvv Lorem ipsum sit domenvvv
            </Li>
          </Ul>
        </Grid>

        <Grid lg={4} md={6} xs={12}>
          <Ul>
            <Li>
              <Span>Name: </Span>
              Sabina
            </Li>
            <Li>
              <Span>Email: </Span>
              ganievasabina202@gmail
            </Li>
            <Li>
              <Span>Text: </Span>
              Lorem ipsum sit domenvvv Lorem ipsum sit domenvvv Lorem ipsum sit
              dvv Lorem ipsum sit domenvvv
            </Li>
          </Ul>
        </Grid>

        <Grid lg={4} md={6} xs={12}>
          <Ul>
            <Li>
              <Span>Name: </Span>
              Sabina
            </Li>
            <Li>
              <Span>Email: </Span>
              ganievasabina202@gmail
            </Li>
            <Li>
              <Span>Text: </Span>
              Lorem ipsum sit domenvvv Lorem ipsum sit domenvvv Lorem ipsum sit
              dvv Lorem ipsum sit domenvvv
            </Li>
          </Ul>
        </Grid>
        {/* ))} */}
      </Grid>
    </>
  );
}

export default Contact;
