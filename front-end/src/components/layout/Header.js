import React, { Component, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 

export class Header extends Component {

    state = {
        date: (new Date())
    }
    
    render() {

        const dateHolder = (this.props.currentDate)
        const currentDateHolder = (this.state.date)

        if (dateHolder === 'Null') {
            this.props.dateChange(this.state.date);
        } else if (dateHolder !== currentDateHolder) {
            this.props.dateChange(this.state.date);
        }
        
        const currentDate = this.state.date

        const CustomInput = forwardRef(
            ({ value, onClick }, ref) => (
              <button className="btn" onClick={onClick} ref={ref}>
                {value}
              </button>
            ),
        );

        return (
            <div className="nav">

                <div className="logo">B.A.R.S</div>

                <div className="nav-centered">
                    <div className="nav-link"><Link to="/HowTo">How It Works</Link></div>
                    <div className="nav-link"><Link to="/About">About</Link></div>
                </div>

                <div className="nav-right">
                    <DatePicker 
                        selected={currentDate}
                        onChange={date => this.setState({date: date})}
                        customInput={<CustomInput />}
                        dateFormat='dd/MM/yyyy'
                        scrollableYearDropdown
                    /> 
                </div>
            </div>
        )
    }
}

export default Header