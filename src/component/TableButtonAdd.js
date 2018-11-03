import React, { Component } from 'react';

import '../style.css';

class ButtonAdd extends Component {

	toggle = () => {
		let toggle = document.getElementById('toggle');
		toggle.classList.toggle('toggleShow');
		toggle.classList.toggle('toggleHide');
	}

	hide = () => {
		let { numberCur } = this.props;
		let elements = document.getElementsByClassName('checkboxHide');
		Array.from(elements).forEach(element => {
			if (element.value == numberCur) {
				element.checked = true
				console.log('qweq')				
			}

			if (element.checked) {
				let parent = element.parentElement;
				parent.classList.add('labelDisplayNone');
			}			
		})		
	}

	componentDidMount() {
		this.hide();
	}

	render() {
		
		return (
			<div>
				<button onClick={this.toggle}>+</button>
				<div id='toggle' className='toggleHide'>
					<label className='label' htmlFor="USA" >
						<input className='checkboxHide' onClick={this.hide} id='USA' type="checkbox" value='145' onChange={this.props.addTableCur} />USA
					</label>&nbsp;&nbsp;&nbsp;
					<label className='label' htmlFor="EUR"  >
						<input className='checkboxHide' onClick={this.hide} id='EUR' type="checkbox" value='292' onChange={this.props.addTableCur} />EUR
					</label>&nbsp;&nbsp;&nbsp;
					<label className='label' htmlFor="RUB" >
						<input className='checkboxHide' onClick={this.hide} id='RUB' type="checkbox" value='298' onChange={this.props.addTableCur} />RUB
					</label>&nbsp;&nbsp;&nbsp;
				</div>
			</div>
		)
	}
}

export default ButtonAdd