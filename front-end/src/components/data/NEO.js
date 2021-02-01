import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class NEO extends Component {

    render() {
        console.log(this.props.neo)
        return (
            <div>
                ----------------<br/>
                Apsolute Magitude: {this.props.neo.absolute_magnitude_h}<br/>
                Estimated Diameter in km Max: {this.props.neo.estimated_diameter.kilometers.estimated_diameter_max}<br/>
                Estimated Diameter in km Min: {this.props.neo.estimated_diameter.kilometers.estimated_diameter_min}<br/>
                Estimated Diameter in m Max: {this.props.neo.estimated_diameter.meters.estimated_diameter_max}<br/>
                Estimated Diameter in m Min: {this.props.neo.estimated_diameter.meters.estimated_diameter_min}<br/>
                ID: {this.props.neo.id}<br/>
                Potentially Hazardous: {this.props.neo.is_potentially_hazardous_asteroid ? 'true' : 'false'}<br/>
                Sentry Object: {this.props.neo.is_sentry_object ? 'true' : 'false'}<br/>
                Name: {this.props.neo.name}<br/>
                JPL: {this.props.neo.nasa_jpl_url}<br/>
                NEO Refference ID: {this.props.neo.neo_reference_id}<br/>

            </div>  
        );
    }
}

// PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }

export default NEO;