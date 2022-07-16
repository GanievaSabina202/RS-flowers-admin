import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DeleteIconCustom } from "../Card/Card.styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
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
          <h5>Bax Silirəm ha ?!</h5>
          <Button onClick={DeleteItem}>OK</Button>
          <Button onClick={handleClose}>NO</Button>
        </Box>
      </Modal>
    </div>
  );
}
