import React, { Component } from 'react';

class Points extends Component{
  render(){
    return (
    <button onClick={this.props.handleClick}  className="btn btn-primary points" name="points">Points</button>
    )
  }
  }
export default Points;
