import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class NEOs extends Component {

    render() {
        console.log(this.props.neos)
        return (
            <div>
                Cum
            </div>  
        );
        // return this.props.todos.map((todo) => (
        //     <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        // ));
    }
}

// PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }

export default NEOs;