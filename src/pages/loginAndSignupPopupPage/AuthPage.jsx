import { Box, Modal } from "@mui/material";
import React from "react";
import RegisterPage from "../../components/popupPageComponents/RegisterPage";
import LoginPage from "../../components/popupPageComponents/LoginPage";
import { useLocation } from "react-router-dom";

const AuthPage = ({ handleClose, open }) => {
  const location = useLocation();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 3,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginPage /> : <RegisterPage />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthPage;
