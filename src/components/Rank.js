import React, { Component } from 'react';

class Rank extends Component{
  render(){
    return (
    <button onClick={this.props.handleClick}  className="btn btn-primary rank" name="rank">Rank</button>
    )
  }
  }

export default Rank;
