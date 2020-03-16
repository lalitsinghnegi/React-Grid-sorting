import React, {Component} from 'react';
import {usersJSON} from '../data';
import TableRow from "./TableRow";
export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentWillReceiveProps(nextProps) {
		let sortBy = nextProps.sortBy;
		if(nextProps.sortBy !== this.props.sortBy){
			switch (sortBy){
				case "age":
					this.compareByAge();
					break;
				case "name":
					this.compareByName();
					break;
				case "points":
					this.compareByPoints();
					break;
				case "rank":
					this.compareByRank();
					break;
				default :
					return false;
			}
		}
	}

    // complete the comparators
	compareByAge(a, b) {
		const { users } = this.state;
		users.sort(this._compareBy("age"));
		this.setState({ users });
	}

	compareByName(a, b) {
		const { users } = this.state;
		users.sort(this._compareBy("name"));
		this.setState({ users });
	}

	compareByPoints(a, b) {
		const { users } = this.state;
		users.sort(this._compareBy("points"));
		this.setState({ users });
	}

	compareByRank(a, b) {
		const { users } = this.state;
		users.sort(this._compareBy("rank"));
		this.setState({ users });
	}

	_compareBy(sortBy) {
		return function(a, b) {
		  if (a[sortBy] < b[sortBy]) return -1;
		  if (a[sortBy] > b[sortBy]) return 1;
		  return 0;
		};
	  }

	render() {
		let rows = this.state.users.map((usr, i) => {
			return (
			  <TableRow
				key={i}
				value={usr}
				data={usr}
			  />
			);
		  });

		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
		<tbody>{rows}</tbody>
			</table>
		</div>)
	}
}
