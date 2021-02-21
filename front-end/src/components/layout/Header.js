import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Header extends Component {

    render() {
        return (
            <div className="nav">

                <div className="logo">B.A.R.S</div>

                <div className="nav-centered">
                    <div className="nav-link"><Link to="/">How It Works</Link></div>
                    <div className="nav-link"><Link to="/about">About</Link></div>
                    <div className="nav-link"><Link to="/custom">Custom Search</Link></div>
                </div>

                <div className="nav-right">
                    <Link to="/about"><button class="btn">Button</button></Link>
                </div>
   
            </div>
        )
    }
}

export default Header