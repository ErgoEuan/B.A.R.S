import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HowTo extends Component {

    render() {

        return (
            <div className="how-to">
                <div className="container">
                    <div className="title">
                        <h1><Link to="/App">B.A.R.S</Link></h1>
                    </div>
                    <div className="small-title">
                        <h1>How It Works W.I.P</h1>
                    </div>
                    <div className="text">
                        <p>
                            B.A.R.S is an application aiming to compile sources of near-earth 
                            object (NEO) data and provide visualisations within a web browser. 
                            By default, B.A.R.S will show NEOs with a close approach date of the 
                            current day. These NEO can be clicked on to get more information or 
                            the date can be changed with the button in the top right to view those 
                            days NEO close approaches. 
                        </p><br/>
                        <p>
                            The application can be accessed <Link to="/App">{'{HERE}'}</Link>
                        </p><br/>
                        <p>
                            The application is <strong style={{color: 'red'}}>NOT </strong> 
                            recommended for mobile phones as optimisation for the smaller 
                            screen size is not yet implemented.
                        </p>
                    </div>
                    <div className="small-title">
                        <h1>Glossary</h1>
                    </div>
                    <div className="text">
                        <p>
                            <strong>Apsolute magitude: </strong>Magnitude at 1 au from Sun and observer
                        </p>
                        <p>
                            <strong>au: </strong>Astronomical unit is a unit of length, roughly the distance from 
                            Earth to the Sun.
                        </p>
                        <p>
                            <strong style={{color: '#ff3d33'}}>Red Name: </strong>Is Potentially Hazardous.
                        </p>
                        <p>
                            <strong style={{color: '#38c7ff'}}>Blue Name: </strong>Is a Sentry Object, more information 
                            available on sentry objects 
                            <a 
                                href="https://cneos.jpl.nasa.gov/sentry/"
                                rel="noopener noreferrer" 
                                target="_blank"
                            > (HERE)</a>
                        </p>
                    </div>
                    <div className="small-title">
                        <h1>Troubleshooting</h1>
                    </div>
                    <div className="text">
                        <p>
                            If the application is running poorly check if hardware 
                            acceleration is enabled in your browser settings.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowTo