import React, {useRef, useState} from 'react';
import {useFrame} from 'react-three-fiber';

import {useGLTF, Html, Center} from 'drei';

import {useSection} from '../utils'

const AsteroidModel = ({modelPath}) => {
    const gltf = useGLTF(modelPath, true);
    let tempGltf = gltf.scene.clone();
    return <primitive object={tempGltf} dispose={null}/>;
};

const NEO = ({neo, count, amount}) => {

    //moddle
    const oddeven = ((count % 2) + 1);
    const oddevenS = oddeven.toString();
    const NumberModle = oddevenS;
    const modelPath = '/asteroid' + NumberModle + '/scene.gltf';

    //size
    const size = ((neo.estimated_diameter.meters.estimated_diameter_max - neo.estimated_diameter.meters.estimated_diameter_min) / 2) + neo.estimated_diameter.meters.estimated_diameter_min;
    var sizeProcessed = 0.6 + (Math.floor((size - 1)/50)*0.2);
    if (size >= 250 && size <= 5000) {
        sizeProcessed = 1.6 + (Math.floor((size - 1)/500)*0.2);
    } else if (size > 5000) {
        sizeProcessed = 3.4
    }

    //positioning x
    const width = Math.floor(useSection().canvasWidth) -10;
    const neosNumber = amount - 1;
    const distance = width/neosNumber
    const x = ((width/2) * -1) + (distance * count)

    //positioning y
    const iteratorY = count + 7; 
    const y = ((iteratorY * (iteratorY/4.5))% 17)-3;

    //spin
    const mesh = useRef(null);
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

    const hazardous = neo.is_sentry_object === true ? '#38c7ff' : neo.is_potentially_hazardous_asteroid === true ? '#ff3d33' : '#ffffff'

    console.log(neo)
    return (
        <>  
            <mesh castShadow position={[x, y, 0]} ref={mesh} scale={[sizeProcessed,sizeProcessed,sizeProcessed]}>
                <AsteroidModel modelPath={modelPath}/>
                <Html zIndexRange={[100, 0]}>
                    <div className="neo-data" style={{ zIndex: zIndex, color: hazardous}}>
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
                                Apsolute magitude: {neo.absolute_magnitude_h}<br/>
                                Estimated diameter maximum: {neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} meters<br/>
                                Estimated diameter minimum: {neo.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} meters<br/>
                                NEO Refference ID: {neo.neo_reference_id}<br/>
                                <a 
                                    href={neo.nasa_jpl_url}
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >Jet Propulsion Laboratory</a><br/>
                            </div>
                            <div className="neo-info-alertH">
                                    {neo.is_potentially_hazardous_asteroid ? 'Is Potentially Hazardous' : ''}
                            </div>
                            <div className="neo-info-alertS">
                                    {neo.is_sentry_object ? 'Is a Sentry Object' : ''}
                            </div>
                            
                        </div> 
                    </Html>
                </mesh>
            </Center>
        </>
    );
};

export default NEO;