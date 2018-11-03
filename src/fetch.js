const format = 'YYYY-MM-DD';

const get = function (cur, dateOld, dateNew) {
	return fetch(`http://www.nbrb.by/API/ExRates/Rates/Dynamics/${cur}?startDate=${dateOld.format(format)}&endDate=${dateNew.format(format)}`).then(res => {
		return res.json();
	})
}

export default get