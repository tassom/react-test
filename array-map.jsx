POST COMMENT (add to array and map list)

const CommentList = (props) => {
  const inputRef = React.useRef();
  const [list, setList] = React.useState([]);

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
    <div>
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
    </div>
  );
};
