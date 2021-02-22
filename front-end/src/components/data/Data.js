import React, {Component, useRef} from 'react';
import NEOs from './NEOs';

import {getCurrentDate} from '../utils'
import {getAPIKey} from '../utils'
import axios from 'axios';

import {Canvas, useFrame} from 'react-three-fiber';

// import {softShadows, MeshWobbleMaterial} from 'drei';

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
                            camera={{position: [-5, 2, 10], fov: [40]}}>

                            <ambientLight intensity={0.3}/>
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
                            <pointLight position={[-10, 0, -20]} intensity={0.5}/>
                            <pointLight position={[0, -10, 0]} intensity={1.5}/>

                            <group>
                                <mesh 
                                    receiveShadow 
                                    rotation={[-Math.PI / 2, 0, 0]} 
                                    position={[0, -3, 0]}>
                                    <planeBufferGeometry attach='geometry' args={[100, 100]}/>
                                    <shadowMaterial attach='material' opacity={0.3}/>
                                </mesh>
                            </group>

                            {/* <SpinningMesh position={[0, 1, 0]} args={[2, 3, 2]} color="lightblue"/>
                            <SpinningMesh position={[-2, 1, -5]} color="pink"/>
                            <SpinningMesh position={[5, 1, -2]} color="lightgreen"/> */}
                            <NEOs neos={this.state.data.near_earth_objects[getCurrentDate()]}/>
                        </Canvas>
                    </div>
                    Got Data.
                    {/* <NEOs neos={this.state.data.near_earth_objects[getCurrentDate()]}/> */}
                </div>
            )
    }
}
