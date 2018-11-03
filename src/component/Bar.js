import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import '../style.css'


class Currency extends Component {

	render() {
		let { rate } = this.props.state;
		let date = rate.map(obj => obj.Date.slice(8, 10));
		let cur = rate.map(obj => obj.Cur_OfficialRate);

		return (
			<div className="line">
				<h2>Currency</h2>
				<Line data={{
					labels: date,
					datasets: [
						{
							label: 'за 1 бел. руб.',
							fill: true,
							lineTension: 0.1,
							backgroundColor: 'rgba(75,192,192,0.4)',
							borderColor: 'rgba(75,192,192,1)',
							borderCapStyle: 'butt',
							borderDash: [],
							borderDashOffset: 0.0,
							borderJoinStyle: 'miter',
							pointBorderColor: 'rgba(75,192,192,1)',
							pointBackgroundColor: '#fff',
							pointBorderWidth: 1,
							pointHoverRadius: 5,
							pointHoverBackgroundColor: 'rgba(75,192,192,1)',
							pointHoverBorderColor: 'rgba(220,220,220,1)',
							pointHoverBorderWidth: 2,
							pointRadius: 1,
							pointHitRadius: 10,
							data: cur
						}
					]
				}} />
			</div>
		);
	}
};

export default Currency;