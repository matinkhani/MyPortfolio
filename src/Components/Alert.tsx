import React, { useRef, useState, useContext } from "react";
import { rootTypes, store } from "../Context/Store";
import { Alert, Collapse } from "@mui/material";
import { AlertContainer } from "../Styled-Components/StyledForm";

export default function AlertFunc() {
  const { alerts, setAlerts } = useContext(store) as rootTypes;

  return (
    <AlertContainer>
      <Collapse
        in={alerts === 1}
        sx={{ minWidth: "30%", display: alerts === 1 ? "red" : "none" }}
        color="error"
      >
        <Alert onClose={() => setAlerts(0)} variant="filled" severity="error">
          Please fill in all the inputs !
        </Alert>
      </Collapse>
      <Collapse
        in={alerts === 2}
        sx={{ minWidth: "30%", display: alerts === 2 ? "green" : "none" }}
      >
        <Alert onClose={() => setAlerts(0)} variant="filled" severity="success">
          Email sent successfully !
        </Alert>
      </Collapse>
    </AlertContainer>
  );
}
