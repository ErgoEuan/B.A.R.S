import React, {useRef} from 'react';
import {useFrame} from 'react-three-fiber';

// import PropTypes from 'prop-types';

// class NEO extends Component {

//     render() {
//         console.log(this.props.neo)
//         return (
//             <div>
//                 ----------------<br/>
//                 Apsolute Magitude: {this.props.neo.absolute_magnitude_h}<br/>
//                 Estimated Diameter in km Max: {this.props.neo.estimated_diameter.kilometers.estimated_diameter_max}<br/>
//                 Estimated Diameter in km Min: {this.props.neo.estimated_diameter.kilometers.estimated_diameter_min}<br/>
//                 Estimated Diameter in m Max: {this.props.neo.estimated_diameter.meters.estimated_diameter_max}<br/>
//                 Estimated Diameter in m Min: {this.props.neo.estimated_diameter.meters.estimated_diameter_min}<br/>
//                 ID: {this.props.neo.id}<br/>
//                 Potentially Hazardous: {this.props.neo.is_potentially_hazardous_asteroid ? 'true' : 'false'}<br/>
//                 Sentry Object: {this.props.neo.is_sentry_object ? 'true' : 'false'}<br/>
//                 Name: {this.props.neo.name}<br/>
//                 JPL: {this.props.neo.nasa_jpl_url}<br/>
//                 NEO Refference ID: {this.props.neo.neo_reference_id}<br/>

//             </div>  
//         );
//     }
// }


const NEO = ({neo, count}) => {
    console.log(neo)
    console.log(count)
    // console.log(neo.name)
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <mesh castShadow position={[0, 0, 0]} ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]}/>
            <meshStandardMaterial attach='material' color="lightblue"/>
        </mesh>
    );
};

// PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }

export default NEO;