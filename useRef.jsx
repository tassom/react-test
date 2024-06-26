//POST COMMENT (add to array and map list)

import { useRef, useState } from "react";

const CommentList = (props) => {
  const inputRef = useRef();
  const [list, setList] = useState([]);

  const handleClick = (event) => {
    const inputValue = inputRef.current.value;
    if (!inputValue || inputValue === "") {
      return;
    }
    if (event.target.value === "Post") {
      const listArray = [...list, inputValue];
      setList(listArray);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <form>
        <input type="text" ref={inputRef} />
        <input
          type="button"
          value="Post"
          onClick={(event) => handleClick(event)}
        />
      </form>
      <ul>
        {list.map((li, index) => {
          return <li key={index}>{li}</li>;
        })}
      </ul>
    </>
  );
};
