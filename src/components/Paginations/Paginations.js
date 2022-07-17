import React from "react";
import { Pagination } from "@mui/material";

const Paginations = ({ postsPerPage, page, handleChange }) => {
  return (
    <Pagination
      color="secondary"
      count={postsPerPage}
      page={page}
      onChange={handleChange}
      defaultPage={2}
      siblingCount={0}
    />
  );
};

export default Paginations;
