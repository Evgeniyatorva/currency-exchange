import React from 'react';
import numberCur from '../current';

const ButtonSwitch = (props) => {
	let { buttonSwitch, buttonState, setCurValue} = props;
	let buttonValue = null;
	let defaulValue = numberCur.USA

	if (buttonState === false) {
		buttonValue = 'Перейти в таблицу'
	} else {
		buttonValue = 'Перейти в график';

	}
	let event = (e) => {
		if (buttonState === true ) {
			setCurValue(e);
		}		
		buttonSwitch()
	}

	return (
		<button onClick={event} value={defaulValue}>{buttonValue}</button>
	)
}

export default ButtonSwitch