import React, {useRef, useState} from 'react';
import {useFrame} from 'react-three-fiber';

import {useGLTF, Sphere, Html} from 'drei';

import {useSection} from '../utils'

// import PropTypes from 'prop-types';

const AsteroidModel = ({modelPath}) => {
    const gltf = useGLTF(modelPath, true);
    return <primitive object={gltf.scene} dispose={null}/>;
};

const NEO = ({neo, count}) => {
    // console.log(count)
    const NumberModle = '1';
    const modelPath = '/asteroid' + NumberModle + '/scene.gltf';

    const size = ((neo.estimated_diameter.meters.estimated_diameter_max - neo.estimated_diameter.meters.estimated_diameter_min) / 2) + neo.estimated_diameter.meters.estimated_diameter_min;

    // console.log(size)

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

    const width = Math.floor(useSection().canvasWidth) -20;
    console.log(width)
    // const xtemp = (width * (Math.sin(count) - count)) ;
    const ytemp = Math.floor(Math.sin(count) * 5) + 2;
    const xtemp = (count - 7) * 3;
    // const xtemp = Math.floor((width/2) - width) + (width/count) ;
    // const ytemp = Math.floor(Math.random() * 11) + -2;

    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    //expand boxs

    const [opacity, setOpacity] = useState("0")
    const [position, setPosition] = useState("absolute")
    const [zIndex, setZIndex] = useState("3")
    const [zIndexB, setZIndexB] = useState("4")
    

    function activateExpand() {

        if (opacity === "0") {
            setOpacity("1")
            setPosition("relative")
            setZIndex("4")
            setZIndexB("5")
        }
        else {
            setOpacity("0")
            setPosition("absolute")
            setZIndex("3")
            setZIndexB("2")
        }
        console.log('name clicked')
    }

    return (
        <mesh castShadow position={[xtemp, ytemp, sizeTemp]} ref={mesh}>
            <AsteroidModel modelPath={modelPath}/>
            <Sphere>
                <meshStandardMaterial attach='material' color="#323030"/>
            </Sphere>
            <Html>
                <div className="neo-data" style={{ zIndex: zIndex}}>
                    <div className="neo-data-name" onClick={activateExpand}>
                        <h3>{neo.name}</h3>
                    </div>
                    <div className="neo-data-expand" style={{ opacity: opacity, position: position, zIndex: zIndexB}}>
                        Apsolute Magitude: {neo.absolute_magnitude_h}<br/>
                        Estimated Diameter in km Max: {neo.estimated_diameter.kilometers.estimated_diameter_max}<br/>
                        Estimated Diameter in km Min: {neo.estimated_diameter.kilometers.estimated_diameter_min}<br/>
                        Estimated Diameter in m Max: {neo.estimated_diameter.meters.estimated_diameter_max}<br/>
                        Estimated Diameter in m Min: {neo.estimated_diameter.meters.estimated_diameter_min}<br/>
                        ID: {neo.id}<br/>
                        Potentially Hazardous: {neo.is_potentially_hazardous_asteroid ? 'true' : 'false'}<br/>
                        Sentry Object: {neo.is_sentry_object ? 'true' : 'false'}<br/>
                        Name: {neo.name}<br/>
                        JPL: {neo.nasa_jpl_url}<br/>
                        NEO Refference ID: {neo.neo_reference_id}<br/>
                    </div>  
                </div>
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