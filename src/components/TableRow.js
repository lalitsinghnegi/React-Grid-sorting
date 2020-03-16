import React,{ Component } from "react";

export default class TableRow extends Component {
  render() {
    const { name, age, points, rank } = this.props.data;
   
    return (
      <tr>
        <td>{age}</td>
        <td>{name}</td>
        <td>{points}</td>
        <td>{rank}</td>
      </tr>
    );
  }
}