import { Canvas } from '@react-three/fiber'
import { FunctionComponent } from 'react'

type SceneProps = {
  children?: React.ReactNode
}

const Scene: FunctionComponent<SceneProps> = ({ children }) => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {children}
    </Canvas>
  )
}

export default Scene
