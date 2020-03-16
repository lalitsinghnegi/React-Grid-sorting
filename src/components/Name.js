import React, { Component } from 'react';

class Name extends Component{
  render(){
    return (<button  onClick={this.props.handleClick} className="btn btn-primary name" name="name">Name</button>
    )
  }
  }
export default Name;
