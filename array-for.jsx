//CARDS WIDGET (for array)

import { useState, useEffect } from "react";

const Cards = ({ amount }) => {
  const [states, setStates] = useState([]);

  const resetStates = () => {
    const statesUpdate = [];
    for (let x = 0; x < amount; x++) {
      statesUpdate[x] = "down";
    }
    return statesUpdate;
  };

  useEffect(() => {
    setStates(resetStates());
  }, []);

  const clickHandler = (index) => {
    const statesUpdate = resetStates();
    statesUpdate[index] = "up";
    setStates(statesUpdate);
  };

  return (
    <table>
      <tbody>
        <tr>
          {states?.map((state, index) => {
            return (
              <td key={index} onClick={() => clickHandler(index)}>
                {state}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};