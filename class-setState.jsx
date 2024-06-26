//CHANGE USERNAME this.setState

import { Component, useRef } from "react";

class Username extends Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  const inputRef = useRef();
 
  function clickHandler() {
    const inputValue = inputRef?.current?.value;
    //window.Username.changeValue(inputValue);
   
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={inputRef} />
      <Username />
    </div>
  );
}

