import { Debug, Physics, useBox, usePlane } from "@react-three/cannon";

const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh receiveShadow position={[0, -70, 0]} ref={ref}>
      <planeGeometry args={[1000, 1000]} />
    </mesh>
  );
};

const Cube = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  );
};

const PhysicsCube = () => {
  return (
    <Physics>
      <Debug color="black" scale={1.1}>
        <Plane />
        <Cube />
      </Debug>
    </Physics>
  );
};

export default PhysicsCube;
