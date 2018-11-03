import moment from 'moment';

let startDate = moment();
let endDate = moment().subtract(7, 'days');

export default {
	startDate,
	endDate
}