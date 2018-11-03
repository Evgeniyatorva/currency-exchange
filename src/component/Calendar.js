import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../style.css'



class Calendar extends Component {

	render() {


		let { handleChangeStart, handleChangeEnd } = this.props;
		let { startDate, endDate } = this.props;

		return (
			<div className="date">
				<div>С
                    <DatePicker
						selected={endDate}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						onChange={handleChangeEnd}
						dateFormat="YYYY-MM-DD"
					/>
				</div>
				<div>ПО
                    <DatePicker
						selected={startDate}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						onChange={handleChangeStart}
						dateFormat="YYYY-MM-DD"
					/>
				</div>
			</div>
		)
	}
}

export default Calendar