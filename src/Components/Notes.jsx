import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import { color } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { fonts, ACTION } from "../App";

const padding = "clamp(10px, 2vw,1.5rem)";

export default function Notes(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: `${padding} 0 ${padding} 0`,
      }}
    >
      <Checkbox
        onClick={() => {
          props.checkHandle({ action: ACTION.TOGGLE, payload: props.id });
        }}
        sx={{
          color: "white",
          "&.Mui-checked": {
            color: "white",
          },
        }}
        checked={props.check}
        color="primary"
      />
      <Accordion
        disabled={props.check}
        style={{
          margin: `0rem ${padding}`,
          width: "100%",
          borderRadius: "8px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "700", fontSize: `${fonts.font1}` }}>
            {props.heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left" }}>{props.text}</Typography>
        </AccordionDetails>
      </Accordion>
      <Box>
        <IconButton
          onClick={() =>
            props.delHandle({ action: ACTION.DEL, payload: props.id })
          }
          color="secondary"
          sx={{
            backgroundColor: "red",
            ":hover": {
              backgroundColor: "#c90000",
            },
          }}
          variant="contained"
        >
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
