import React, {Component} from 'react';
import NEO from './NEO';

class NEOs extends Component {
    
    render() {
        const amount = (this.props.neos).length;
        return this.props.neos.map((neo, i) => (
            <NEO key={i} neo={neo} count={i} amount={amount}/>
        ));
    }
}

export default NEOs;