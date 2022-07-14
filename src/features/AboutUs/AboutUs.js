import React, { useEffect, useState } from "react";
import PageDesc from "../../components/PageDesc/PageDesc";
import { Grid } from "@mui/material";
import { Test } from "./AboutUs.styled";
import Drawers from "../../components/Drawers/Drawers";
import Card from "../../components/Card/Card";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function AboutUs() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "aboutUs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Test>
        <PageDesc title="About Us Page" />
        <Drawers drawersName="aboutUs" />
      </Test>

      <Grid container>
        {users &&
          users.map((item) => (
            <Grid key={item.id} lg={12} md={12} sm={12}>
              <Card item={item} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default AboutUs;
