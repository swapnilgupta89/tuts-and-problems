import React, {Component} from 'react';

class Input extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {classValue, handleChange, inputType} = this.props;
    return(
      <input type={inputType} name={classValue} className={classValue} placeholder={classValue} onChange = {handleChange}/>
    )
  }
}

export default Input;
