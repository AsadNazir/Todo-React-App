import { useReducer, useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import Notes from "./Components/Notes";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import StyledTextFields from "./Components/StyledTextFields";
import { AddRounded, TodayRounded } from "@mui/icons-material";

export const fonts = {
  font1: "clamp(1rem,3vw,1.3rem)",
  font2: "clamp(0.9rem,2.5vw,1.2rem)",
  font3: "clamp(1rem,3vw,2rem)",
};

export const ACTION = {
  DEL: "Delete",
  ADD: "add",
  TOGGLE: "Toggle",
};

function reducer(state, action) {
  switch (action.action) {
    case ACTION.ADD:
      return [
        ...state,
        {
          heading: action.payload.headText,
          text: action.payload.bodyText,
          key: Date.now(),
          check: false,
        },
      ];
    case ACTION.TOGGLE:
      return state.map((todo) => {
        if (todo.key === action.payload) {
          // console.log(todo);
          return { ...todo, check: !todo.check };
        }
        return todo;
      });

    case ACTION.DEL:
    
      return state.filter((todo) => todo.key !== action.payload);

      break;
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");

  function ChangeText(e) {
    setText(e.target.value);
  
  }
  function ChangeHead(e) {
    setHeading(e.target.value);
    
  }
  return (
    <div
      className="App"
      style={{ width: "clamp(250px,90vw,600px)", margin: "auto" }}
    >
      <h1 style={{ color: "white" }}>Notes App</h1>
      <StyledTextFields rows={2} value={heading} setter={ChangeHead} />
      <StyledTextFields rows={5} value={text} setter={ChangeText} />
      <Box>
        <Button
          onClick={() =>{
          
            dispatch({
              action: ACTION.ADD,
              payload: { headText: heading, bodyText: text },
            })
            setHeading("");
            setText("");
          }
          }
          endIcon={<AddRounded />}
          variant="contained"
        >
          Add
        </Button>
      </Box>
      <Box className="NotesBox">
        {todos.map((todo) => {
          return (
            <Notes
              checkHandle={dispatch}
              key={todo.key}
              id={todo.key}
              heading={todo.heading}
              text={todo.text}
              check={todo.check}
              delHandle={dispatch}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default App;
