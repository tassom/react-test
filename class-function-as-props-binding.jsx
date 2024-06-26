//pass a function as a props to class with binding

import { Component } from "react";

const TodoItem = ({ onClick, item }) => <li onClick={onClick}>{item.text}</li>;

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.props.onItemClick.bind(this);
  }
  render() {
    const { items, onListClick } = this.props;
    return (
      <ul onClick={onListClick}>
        {items.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            onClick={this.handleItemClick.bind(this, item)}
          />
        ))}
      </ul>
    );
  }

  handleItemClick(item, event) {
    if (item.done) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.onItemClick(item, event);
    }
  }
}

const items = [
  { text: "Buy grocery", done: true },
  { text: "Play guitar", done: false },
  { text: "Romantic dinner", done: false }
];

const App = (props) => (
  <TodoList
    items={props.items}
    onListClick={(event) => console.log("List clicked!")}
    onItemClick={(item, event) => {
      console.log(item, event);
    }}
  />
);


root.render(<App items={items} />);
