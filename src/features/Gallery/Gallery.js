import React, { useEffect, useState } from "react";
import PageDesc from "../../components/PageDesc/PageDesc";
import Drawers from "../../components/Drawers/Drawers";
import { Grid } from "@mui/material";
import { db } from "../../config/firebase";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { Test } from "./Gallery.styled";
import Card from "../../components/Card/Card";
import Paginations from "../../components/Paginations/Paginations";

function Gallery() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // PAGINATION
  const [page, setPage] = useState(1);
  const postsPerPage = Math.ceil(8);
  const last_page = Math.ceil(users.length / postsPerPage);
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "gallery"),
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
        <PageDesc title="Gallery Page" />
        <Drawers drawersName="gallery" />
      </Test>

      <Grid container>
        {currentPosts &&
          currentPosts.map((item) => (
            <Grid key={item.id} lg={3} md={4} sm={6}>
              <Card item={item} fbName="gallery" />
            </Grid>
          ))}
      </Grid>
      
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        mt={5}
      >
        <Paginations
          postsPerPage={last_page}
          page={page}
          handleChange={handleChange}
        />
      </Grid>
    </>
  );
}

export default Gallery;
