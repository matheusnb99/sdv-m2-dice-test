import { Vector3 as Vector3Type, useFrame } from "@react-three/fiber";
import { FunctionComponent, useRef } from "react";
import { Group } from "three";

import InnerBox from "./InnerBox";
import OuterBox from "./OuterBox";

type CubeProps = {
  position: Vector3Type;
};

const params = {
  numberOfDice: 2,
  segments: 40,
  edgeRadius: 0.07,
  notchRadius: 0.12,
  notchDepth: 0.1,
};

const Cube: FunctionComponent<CubeProps> = ({ position }) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta;
    }
  });

  return (
    <group dispose={null} ref={groupRef}>
      {/* innerMesh */}
      <InnerBox position={position} edgeRadius={params.edgeRadius} />

      {/* outer */}
      <OuterBox position={position} params={params} />
    </group>
  );
};

export default Cube;
