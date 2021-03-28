import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
// import {getCurrentDate} from '../utils'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css' 


const Header = () => {
    // const [selectedDate, setSelectedDate] = useState(null)
    // console.log(getCurrentDate())
    // console.log(selectedDate)
    return (
        <div className="nav">

            <div className="logo">B.A.R.S</div>

            <div className="nav-centered">
                <div className="nav-link"><Link to="/">How It Works</Link></div>
                <div className="nav-link"><Link to="/about">About</Link></div>
                <div className="nav-link"><Link to="/custom">Custom Search</Link></div>
            </div>

            <div className="nav-right">
                <button className="btn">
                    {/* <DatePicker 
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat='dd/MM/yyyy'
                        showYearDropdown
                        scrollableYearDropdown
                    /> */}
                </button>
                
                    {/* <DatePicker 
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat='dd/MM/yyyy'
                        showYearDropdown
                        scrollableYearDropdown
                    /> */}
                
            </div>
        </div>
    );
};

// export class Header extends Component {

//     render() {
//         return (
//             <div className="nav">

//                 <div className="logo">B.A.R.S</div>

//                 <div className="nav-centered">
//                     <div className="nav-link"><Link to="/">How It Works</Link></div>
//                     <div className="nav-link"><Link to="/about">About</Link></div>
//                     <div className="nav-link"><Link to="/custom">Custom Search</Link></div>
//                 </div>

//                 <div className="nav-right">
//                     <Link to="/about"><button className="btn">Button</button></Link>
//                 </div>
//             </div>
//         )
//     }
// }

export default Header