import React, {Component, Suspense, useRef} from 'react';
import NEOs from './NEOs';

import {getCurrentDate} from '../utils'
import {getAPIKey} from '../utils'
import axios from 'axios';

import {Canvas, useFrame} from 'react-three-fiber';

import {Html, useGLTF} from 'drei';


// const SpinningMesh = ({position, args, color}) => {
//     const mesh = useRef(null);
//     useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//     return (
//         <mesh castShadow position={position} ref={mesh}>
//             <boxBufferGeometry attach='geometry' args={args}/>
//             <meshStandardMaterial attach='material' color={color}/>
//         </mesh>
//     );
// };

const EarthModel = () => {
    const gltf = useGLTF('/earth/scene.gltf', true)
    return <primitive object={gltf.scene} dispose={null}/>
};

// const Asteroid1Model = () => {
//     const gltf = useGLTF('/asteroid1/scene.gltf', true)
//     return <primitive object={gltf.scene} dispose={null}/>
// };

// const Asteroid2Model = () => {
//     const gltf = useGLTF('/asteroid2/scene.gltf', true)
//     return <primitive object={gltf.scene} dispose={null}/>
// };

// const Asteroid3Model = () => {
//     const gltf = useGLTF('/asteroid3/scene.gltf', true)
//     return <primitive object={gltf.scene} dispose={null}/>
// };

const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      </>
    );
  };

const Earth = () => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += -0.0006));
    return (
        <group position={[0, 0, 0]}>
            <mesh position={[0, -5.5, 110]} ref={mesh}>
               <EarthModel/> 
            </mesh>
        </group>
    )
}

export default class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    updateData() {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
            params: {
                start_date: getCurrentDate(),
                end_date: getCurrentDate(),
                api_key: getAPIKey()
            }
        })
        .then(res => {
            this.setState({ data: res.data });
        });
    }
    
    componentDidMount() {
        this.updateData()
    }

    render() {
        if (undefined === this.state.data.near_earth_objects)
            return (
                <div>
                    No Data.
                </div>  
            );
        else 
            return (
                <div>
                    <div className="canvas">
                        <Canvas 
                            shadowMap 
                            colorManagement 
                            camera={{position: [0, 0, 120], fov: 15}}>
                            <Lights/>
                            <Suspense fallback={null}>
                                <Earth/>
                                <NEOs neos={this.state.data.near_earth_objects[getCurrentDate()]}/>
                            </Suspense>

                            {/* <group>
                                <mesh 
                                    receiveShadow 
                                    rotation={[-Math.PI / 2, 0, 0]} 
                                    position={[0, -3, 0]}>
                                    <planeBufferGeometry attach='geometry' args={[100, 100]}/>
                                    <shadowMaterial attach='material' opacity={0.3}/>
                                </mesh>
                            </group> */}
                        </Canvas>
                    </div>
                </div>
            )
    }
}
