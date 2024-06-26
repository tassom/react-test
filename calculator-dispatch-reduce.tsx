//SIMPLE CALCULATOR (dispatch & reducer)

import { useState, useReducer } from "react";

const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

export function App() {
  const [number, updateNumber] = useState(0);

  const [state, dispatch] = useReducer((state, action) => {
    /* implement the reducer which should update the state based on the action */
    switch (action.type) {
      case OPERATIONS.ADD:
        state = state + action.payload;
        break;
      case OPERATIONS.SUBTRACT:
        state = state - action.payload;
        break;
      default:
        return;
    }
    return state;
  }, 0);

  const add = () => dispatch({ type: OPERATIONS.ADD, payload: number});
  const subtract = () => dispatch({ type: OPERATIONS.SUBTRACT, payload: number});

  const handleNumberChange = (e) => updateNumber(Number(e.target.value));

  return (
    <>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>
          Add
        </button>
        <button id="subtract" onClick={subtract}>
          Subtract
        </button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </>
  );
}