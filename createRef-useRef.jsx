//createRef vs useRef

// createRef: creates a new ref on every render in function components (class component)
// useRef: keeps the same value after each render in a function component (function component)

import { createRef, useEffect } from "react";

const FocusableInput = ({ shouldFocus }) => {
  const inputRef = createRef();
  
  useEffect(() => {
    if(shouldFocus)
      inputRef.current.focus()
    
  },[])
  
  return <input ref={inputRef}/>;
};

root.render(<FocusableInput shouldFocus />);
