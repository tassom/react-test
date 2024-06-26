//PLAYER STATUS (useEffect)

import { useState } from "react";

export function PlayerStatus() {
  const [status, setStatus] = useState("online");
  const [counter, setCounter] = useState(0);


  function toggleStatus() {
    const statusUpdate = status === "away" ? "online" : "away";
    setStatus(statusUpdate);
  }

  useEffect(() => {
   setCounter((counter) => counter + 1);
  }, [status]);

  return (
    <>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={toggleStatus}>Toggle status</button>
    </>
  );
}