import { Canvas } from "@react-three/fiber";
import "./App.css";
import PhysicsCube from "./components/PhysicsCube";

const App = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <Cube position={[0, 0, 0]} /> */}
        <PhysicsCube />
      </Canvas>
      ,
    </>
  );
};

export default App;
