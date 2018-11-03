import React, { Component } from 'react';
import date from '../date';
import numberCur from '../current';
import get from '../fetch';

import Bar from './Bar';
import Drop from './Dropdown';
import Calendar from './Calendar';
import Table from './Table';
import ButtonSwitch from './ButtonSwitch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: [],
      startDate: date.startDate,
      endDate: date.endDate,
      numberCur: numberCur.USA,
      tableRate: [],
      button: false
    }
  }

  componentDidMount() {
    let { tableRate, numberCur, startDate, endDate } = this.state;
    get(numberCur, endDate, startDate).then(res => {
      this.setState({
        rate: res,
        tableRate: [...tableRate, res]
      });
    })
  }

  componentDidUpdate(prevProps, prevState) {
    let { numberCur, startDate, endDate } = this.state;

    if (prevState.numberCur !== numberCur) {
      get(numberCur, endDate, startDate).then(res => {
        this.setState({
          rate: res,
          tableRate: [res]

        });
      })
    }

    if (prevState.startDate !== startDate || prevState.endDate !== endDate) {
      get(numberCur, endDate, startDate).then(res => {
        this.setState({
          rate: res,
          tableRate: [res]
        });
      })
    }
  }

  setCurValue = (e) => {
    this.setState({
      numberCur: e.target.value
    })
    if (this.state.button === true) {
      this.setState({
        tableRate: [this.state.rate]
      })
      console.log(this.state.tableRate)
    }
    
  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    })
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    })
  }

  addTableCur = (e) => {
    let checked = e.target.checked;

    if (checked) {
      let { tableRate, startDate, endDate } = this.state;
      let number = e.target.value;
      get(number, endDate, startDate).then(res => {
        let condition = tableRate.some(arr => arr.some(obj => obj.Cur_ID == number))
        if (condition) {
          return
        } else {
          this.setState({
            tableRate: [...tableRate, res]
          });
        }
      })
    }
  }

  removeTableCur = () => {

  }

  buttonSwitch = () => {
    this.setState({
      button: !this.state.button
    })
  }

  render() {    
    let {tableRate, numberCur, button, startDate, endDate} = this.state;

    let display = null;

    if( button === false ) {
      display = <div>
        <Bar state={this.state} />
      <Drop setCurValue={this.setCurValue} value={numberCur} />
      <Calendar handleChangeStart={this.handleChangeStart} handleChangeEnd={this.handleChangeEnd} startDate={startDate} endDate={endDate} />
      </div>
      
    } else {
      display = <Table numberCur={numberCur} tableRate={tableRate} addTableCur={this.addTableCur}/>
    }

    return (
      <div>
        <ButtonSwitch setCurValue={this.setCurValue} buttonSwitch={this.buttonSwitch} buttonState={button}/>
        {display}        
      </div>
    );
  }
}

export default App;