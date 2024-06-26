//createRef focus

import  { PureComponent, Component, createRef, forwardRef } from "react";

class Input extends PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInput extends Component {
  
  ref = createRef()

  render() {
    return <TextInput ref={this.ref} />;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.focused === false && !this.ref.current.focus() && this.ref.current.value)
      ref.current.focus();
  }
  
  componentDidMount() {
    if(this.props.focused)
      this.ref.current.focus();
  }
}

FocusableInput.defaultProps = {
  focused: false
};

const App = (props) => <FocusableInput focused={props.focused} />;
