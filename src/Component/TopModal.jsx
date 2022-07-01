import React, { Suspense, useRef }  from 'react'

import {Canvas, useLoader } from "@react-three/fiber"
import {Html, OrbitControls, Stage, useGLTF} from '@react-three/drei'

const TopModal  = () => {

  const ref = useRef()


return (
    <div style={{marginLeft:'5rem',width:'1000px',height:"500px",border:'1px solid red'}}>

    <Canvas camera={{position:[-10,0,0],fov:35}} >
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <group>
   <Html transform occlude rotation-y={-Math.PI/2}>
    <div  className="wrapper" > hello test</div>
   </Html>

      </group> 
     

    
    
   
    

      <OrbitControls enablePan={false} autoRotate={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>

    </div>
  )
}

export default TopModal