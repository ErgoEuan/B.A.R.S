import React, { Component } from 'react'

export class About extends Component {

    render() {

        const Resources  = () => {
            return (
                <>
                    <a 
                        href="https://reactjs.org/"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >{'{React}'} </a>
                    <a 
                        href="https://threejs.org"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >{'{three.js}'} </a>
                    <a 
                        href="https://github.com/pmndrs/react-three-fiber"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >{'{react-three-fiber}'} </a>
                    <a 
                        href="https://github.com/pmndrs/drei"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >{'{drei}'} </a>
                    <a 
                        href="https://reactrouter.com"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >{'{react-router-dom}'} </a>
                    <a 
                        href="https://github.com/axios/axios"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >{'{axios}'} </a>
                    <a 
                        href="https://www.npmjs.com/package/react-datepicker"
                        rel="noopener noreferrer" 
                        target="_blank"
                    >{'{react-datepicker}'} </a>
                </>
            )
        }

        return (
            <div className="about">
                <div className="container">
                    <div className="title">
                        <h1>About W.I.P</h1>
                    </div>
                    <div className="text">
                        <p>
                            B.A.R.S is my honours project application aiming to compile sources 
                            of near-earth object data, as well as subsequent processing steps in order to provide 
                            visualisations.
                        </p><br/>
                        <p>
                            Frameworks and Libraries used within this application: <Resources/>
                        </p>
                    </div>
                    <div className="links">
                        <a 
                            href="https://github.com/ErgoEuan"
                            rel="noopener noreferrer" 
                            target="_blank"
                        >{'{myGit}'}</a>
                        <a 
                            href="https://github.com/ErgoEuan/B.A.R.S"
                            rel="noopener noreferrer" 
                            target="_blank"
                        >{'{repo}'}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About