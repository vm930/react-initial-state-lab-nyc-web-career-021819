// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secondsLeft: this.props.initialCount
		};
	}

	render() {
		return (
			<div>
				{this.state.secondsLeft == 0 ? (
					<div>Boom!</div>
				) : (
					<div>{this.state.secondsLeft} seconds left before I go boom!</div>
				)}
			</div>
		);
	}
}

export default Bomb;
