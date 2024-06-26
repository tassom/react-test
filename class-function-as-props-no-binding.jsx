//pass a function as a props to class without binding

import { Component } from "react";

class TodoList extends Component {
  render() {
    const { items, onListClick, onItemClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item, onItemClick)}/>)}
    </ul>);
  }
  
  handleItemClick(item, onItemClick, event) {
    if(!item.done)
      onItemClick(item, event)
    else
      event.preventDefault();
      event.stopPropagation(); 
  }
}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";


root.render(<App items={items}/>);