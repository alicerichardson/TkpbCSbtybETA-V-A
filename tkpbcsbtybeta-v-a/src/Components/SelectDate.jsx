import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import './css/selectdate.css';
import 'react-datepicker/dist/react-datepicker.css';

/* eslint-disable react/no-multi-comp */
class ExampleCustomInput extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
  };

  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (   
        <div className="column">
          <DatePicker
            customInput={<ExampleCustomInput />}
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
    );
  }
}

/*import React from 'react';
import DatePicker from 'react-datepicker'
// npm i react-datepicker

class SelectDate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startDate: new Date()
        };
    this.handleChange = this.handleChange.bind(this);
    }


    handleChange(date){
        this.setState({startDate: date});
        this.toggleCalendar();
    }

    toggleCalendar (e){
        e && e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    }

    render (){
        return(
        <div>
        <button
            className="SelectDate"
            onClick={this.toggleCalendar}>
        </button>
        {
            this.state.isOpen && (
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    inline />
                )
        } 
        </div>
        )
    }
} */
