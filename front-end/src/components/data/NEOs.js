import React, {Component} from 'react';
import NEO from './NEO';
// import PropTypes from 'prop-types';

class NEOs extends Component {

    render() {
        console.log(this.props.neos)
        return this.props.neos.map((neo, i) => (
            <NEO key={i} neo={neo}/>
        ));
    }
}

// PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }

export default NEOs;