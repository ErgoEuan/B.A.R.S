import React, {Component, Suspense, useRef} from 'react';
import NEOs from './NEOs';
import axios from 'axios';

// Utils
import {getCurrentDate} from '../utils'
import {getAPIKey} from '../utils'

// R3F
import { Canvas, useFrame } from "react-three-fiber";
import { useGLTF } from "drei";

const EarthModel = () => {
    const gltf = useGLTF('/earth/scene.gltf', true)
    return <primitive object={gltf.scene} dispose={null}/>
};

const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
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
                        </Canvas>
                    </div>
                </div>
            )
    }
}
