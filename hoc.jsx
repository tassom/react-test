//LIST WRAPPER  (HOC)
//Takes a component as an arg and returned a new component

import { Component } from "react";

const withList = (ItemComponent) => ({items}) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <ItemComponent item={item} />
          </li>
        );
      })}
    </ul>
  );
};

class Link extends Component {
  render() {
    if (!this.props.item) return null;
    return <a href={this.props.item.href}>{this.props.item.text}</a>;
  }
}

const LinkList = withList(Link);