import { InputLabel } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { InputBase, Slider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";

const CustomeTextField = styled(InputBase)`
  .root {
    color: green;
  }
  .MuiInputBase-input {
    color: black;
    background: white;
    padding: 1rem;
    border-radius: 4px;
    border: 2px solid grey;
  }

  .MuiFilledInput-root:focus {
    outline: none;
  }
  .MuiInputBase-input:hover {
    border: 2px solid black;
  }
`;
export default function StyledComponentsDeep(props) {
  return (
    <Box>
      <CustomeTextField value={props.value} onChange={props.setter} rows={props.rows} fullWidth aria-label="Some" placeholder="Some" multiline />
    </Box>
  );
}
