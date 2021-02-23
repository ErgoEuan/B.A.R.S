import React, {useRef} from 'react';
import {useFrame} from 'react-three-fiber';

import {useGLTF, Sphere, Html} from 'drei';

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

const AsteroidModel = ({modelPath}) => {
    const gltf = useGLTF(modelPath, true)
    return <primitive object={gltf.scene} dispose={null}/>
};

const NEO = ({neo, count}) => {
    console.log(count)
    const NumberModle = '1';
    const modelPath = '/asteroid' + NumberModle + '/scene.gltf';

    const size = ((neo.estimated_diameter.meters.estimated_diameter_max - neo.estimated_diameter.meters.estimated_diameter_min) / 2) + neo.estimated_diameter.meters.estimated_diameter_min;

    console.log(size)

    var sizeTemp = 0;
    if (size <= 25) {
        sizeTemp = 1
    }
    else if (size <= 50) {
        sizeTemp = 10
    } 
    else if (size <= 100) {
        sizeTemp = 20
    }
    else if (size <= 150) {
        sizeTemp = 30
    }
    else {
        sizeTemp = 40
    }

    console.log(sizeTemp)

    const xtemp = (count - 7) * 3;
    const ytemp = Math.floor(Math.random() * 11) + -2

    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <mesh castShadow position={[xtemp, ytemp, sizeTemp]} ref={mesh}>
            <AsteroidModel modelPath={modelPath}/>
            <Sphere>
                <meshStandardMaterial attach='material' color="#323030"/>
            </Sphere>
            <Html>
                <h1>0</h1>
            </Html>
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