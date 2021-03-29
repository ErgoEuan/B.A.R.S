import React, {useRef, useState} from 'react';
import {useFrame} from 'react-three-fiber';

import {useGLTF, Html, Center} from 'drei';

import {useSection} from '../utils'

// import PropTypes from 'prop-types';

const AsteroidModel = ({modelPath}) => {
    const gltf = useGLTF(modelPath, true);
    let tempGltf = gltf.scene.clone();
    return <primitive object={tempGltf} dispose={null}/>;
};

const Glow = ({hazardous, x, y, z}) => {

    console.log(hazardous)
    if (hazardous === true) {
        console.log('trig')
        const tempz = z + 5;
        return (
            <>
                {/* <directionalLight position={[x, y, z]} intensity={1} color={'red'} /> */}
                <spotLight intensity={1} position={[x, y, tempz]} color={'red'} />
            </>
        );
    } else {
        return (
            <>
            </>
        );
    }
};

const NEO = ({neo, count}) => {

    const oddeven = ((count % 2) + 1);
    const oddevenS = oddeven.toString();
    const NumberModle = oddevenS;
    const modelPath = '/asteroid' + NumberModle + '/scene.gltf';

    const size = ((neo.estimated_diameter.meters.estimated_diameter_max - neo.estimated_diameter.meters.estimated_diameter_min) / 2) + neo.estimated_diameter.meters.estimated_diameter_min;

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
    // const ranSpin = 0.003;
    const ranSpin = (Math.floor(Math.random() * (9 - 3 + 1) + 3))/ 1000;
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += ranSpin));


    const [isActive, setIsActive] = useState(false)
    const [zIndex] = useState("3")
    // const [zIndex, setZIndex] = useState("3")
    
    function toggleExpand() {
        var elems = document.querySelectorAll(".neo-data-expand.isActive");
        // console.log(elems.length, isActive)
        if(elems.length > 0 && isActive) {
            setIsActive(false)

        } else if(elems.length === 0 && !isActive) {
            
            setIsActive(true)
        }
        // console.log('name clicked')
    }

    return (
        <>  
            <mesh>
                <Glow hazardous={neo.is_potentially_hazardous_asteroid} x={xtemp} y={ytemp} z={sizeTemp}/>
            </mesh>
            <mesh castShadow position={[xtemp, ytemp, sizeTemp]} ref={mesh}>
                <AsteroidModel modelPath={modelPath}/>
                <Html
                zIndexRange={[100, 0]}>
                    <div className="neo-data" style={{ zIndex: zIndex}}>
                        <div className="neo-data-name" onClick={toggleExpand}>
                        {neo.name}
                        </div> 
                    </div>
                </Html>
            </mesh>
            <Center>
                <mesh>
                    <Html>
                        <div className={`neo-data-expand ${isActive ? 'isActive' : ''}`}>
                        <div className="neo-data-close" onClick={toggleExpand}>Close</div>
                            <div className="neo-title">
                                {neo.name}
                            </div>
                            <div className="neo-info">
                                Apsolute Magitude: {neo.absolute_magnitude_h}<br/>
                                Estimated Diameter in km Max: {neo.estimated_diameter.kilometers.estimated_diameter_max}<br/>
                                Estimated Diameter in km Min: {neo.estimated_diameter.kilometers.estimated_diameter_min}<br/>
                                Estimated Diameter in m Max: {neo.estimated_diameter.meters.estimated_diameter_max}<br/>
                                Estimated Diameter in m Min: {neo.estimated_diameter.meters.estimated_diameter_min}<br/>
                                Potentially Hazardous: {neo.is_potentially_hazardous_asteroid ? 'true' : 'false'}<br/>
                                Sentry Object: {neo.is_sentry_object ? 'true' : 'false'}<br/>
                                JPL: {neo.nasa_jpl_url}<br/>
                                NEO Refference ID: {neo.neo_reference_id}<br/>
                            </div>
                        </div> 
                    </Html>
                </mesh>
            </Center>
        </>
    );
};

// PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }

export default NEO;