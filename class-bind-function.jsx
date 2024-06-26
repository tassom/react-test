// Bind handler function

class Message extends React.Component {
  constructor(){
     super();
      this.state = {visible: false}
      this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({visible: true})
  }
  render() {
    return (<>
          <a href="#" onClick={this.clickHandler}>Want to buy a new car?</a>
        {this.state.visible && <p>Call +11 22 33 44 now!</p>}
        </>);
  }
}



root.render(<Message />);
