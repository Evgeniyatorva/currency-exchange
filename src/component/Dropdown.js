import React, { Component } from 'react';
import numberCur from '../current';
import '../style.css'

class Drop extends Component {

	render() {
		return (
			<div className="drop">
				<select value={this.props.value} onChange={this.props.setCurValue}>
					{Object.keys(numberCur).map(numberCurId => (
						<option key={numberCurId} value={numberCur[numberCurId]}>
							{numberCurId}
						</option>
					))}
				</select>
			</div>
		)
	}
}

export default Drop;