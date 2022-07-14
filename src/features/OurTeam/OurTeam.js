import React, { useEffect, useState } from "react";
import PageDesc from "../../components/PageDesc/PageDesc";
import { Test } from "./OurTeam.styled";
import { Grid } from "@mui/material";
import Card from "../../components/Card/Card";
import Drawers from "../../components/Drawers/Drawers";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function OurTeam() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "ourteam"),
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
        <PageDesc title="Our Team Page" />
        <Drawers drawersName="ourteam"/>
      </Test>

      <Grid container>
        {users &&
          users.map((item) => (
            <Grid key={item.id} lg={3} md={4} sm={6}>
              <Card item={item} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default OurTeam;
