import React, { Component } from 'react';
import TableButtonAdd from './TableButtonAdd';

class Table extends Component {

	render() {
		let { tableRate, addTableCur, numberCur } = this.props;

		let tableDate = null;
		if (Array.isArray(tableRate[0])) {
			tableDate = <td>
				<table>
					<tbody>
						<tr>
							<th>Дата</th>
						</tr>
						{tableRate[0].map(obj => {
							return (
								<tr>
									<td>{obj.Date.slice(0, 10)}</td>
								</tr>
							)
						}
						)}
					</tbody>
				</table>
			</td>
		}

		let tableCur = tableRate.map(arr => {
			let curID = null;
			if (arr[0].Cur_ID === 145) {
				curID = 'USA'
			} else if (arr[0].Cur_ID === 292) {
				curID = 'EUR'
			} else if (arr[0].Cur_ID === 298) {
				curID = 'RUB'
			}
			return (
				<td>
					<table>
						<tbody>
							<tr>
								<th>
									{curID}
								</th>
							</tr>
							{arr.map(obj => {
								return (
									<tr>
										<td>{obj.Cur_OfficialRate}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</td>
			)
		})
		return (
			<div>
				<TableButtonAdd numberCur={numberCur} addTableCur={addTableCur} />
				<table border="1">
					<caption>Таблица курсов</caption>
					<tbody>
						<tr>
							{tableDate}
							{tableCur}
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table;