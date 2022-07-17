import React, { useState } from "react";
import { Grid, Box, Button, Modal, Typography } from "@mui/material";
import { DeleteIconCustom } from "../Card/Card.styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:1,
  p: 4,
};

export default function Modals({ deleteHandler }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const DeleteItem = () => {
    deleteHandler();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <DeleteIconCustom />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" component="h5" align="center"  mb={2}>
            Əminsiniz mi?
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button onClick={DeleteItem} variant="contained" color="success">
              BƏlİ
            </Button>
            <Button onClick={handleClose} variant="contained" color="error">
              XEYR
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
