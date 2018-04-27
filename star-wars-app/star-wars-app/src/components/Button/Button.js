import React, {Component} from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {classValue, text} = this.props;
    return(
      <input type="submit" className = {classValue} name={classValue} value={text}/>
    )
  }
}

export default Button;
