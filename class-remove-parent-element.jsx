//remove parent element

import { Component } from "react";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = (event) => {
    event.currentTarget.parentNode.remove();
  };

  render() {
    return this.props.links.map((link) => {
      return (
        <div>
          <div class="image">
            <img src={link} />
            <button
              class="remove"
              onClick={(event) => this.clickHandler(event)}
            >
              X
            </button>
          </div>
        </div>
      );
    });
  }
}



root.render(<ImageGallery links={ links } />);
