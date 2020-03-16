import React, { Component } from 'react';

class Age extends Component{
render(){
  return (
  <button onClick={this.props.handleClick} className="btn btn-primary age" name="age">Age</button>
  )
}
}
export default Age;
