import React, { Suspense, useRef }  from 'react'

import {Canvas, useLoader } from "@react-three/fiber"
import {Html, OrbitControls, Stage, useGLTF} from '@react-three/drei'

import Model from './Model'
const TopModal  = () => {

  const ref = useRef()


return (
    <div style={{width:'1000px',height:"500px",border:'1px solid red'}}>

    <Canvas camera={{position:[-10,0,0],fov:35}} >
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <group>
    <Html className="content"rotation-y={-Math.PI/2}   position={[0.231166, .75, 0]} transform occlude>
              <div className="wrapper">
              <iframe  src="/moni.html" ></iframe>

              </div>
            </Html>
      <Suspense fallback={null}>
      
    <Model rotation-y={-Math.PI/2} position-y={-1.2}  />
       
      </Suspense>
      </group> 
     

    
    
   
    

   
<OrbitControls




// enablePan={true}
// enableZoom={false}
// enableRotate={false}
// autoRotate={false}
// autoRotateSpeed={0.5}/
// maxZoom={1}/






  makeDefault
 >


 </OrbitControls>
    </Canvas>
    </div>
  )
}

export default TopModal