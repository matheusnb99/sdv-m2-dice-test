import { useBox } from "@react-three/cannon";
import { FunctionComponent } from "react";
import { PlaneGeometry } from "three";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";

type InnerBoxProps = {
  position: [number, number, number];
  edgeRadius: number;
};

const CreateInnerGeometry = (edgeRadius: number) => {
  const baseGeometry = new PlaneGeometry(1 - 2 * edgeRadius, 1 - 2 * edgeRadius);

  const offset = 0.48;
  return BufferGeometryUtils.mergeGeometries(
    [
      baseGeometry.clone().translate(0, 0, offset),
      baseGeometry.clone().translate(0, 0, -offset),
      baseGeometry
        .clone()
        .rotateX(0.5 * Math.PI)
        .translate(0, -offset, 0),
      baseGeometry
        .clone()
        .rotateX(0.5 * Math.PI)
        .translate(0, offset, 0),
      baseGeometry
        .clone()
        .rotateY(0.5 * Math.PI)
        .translate(-offset, 0, 0),
      baseGeometry
        .clone()
        .rotateY(0.5 * Math.PI)
        .translate(offset, 0, 0),
    ],
    false
  );
};

const InnerBox: FunctionComponent<InnerBoxProps> = ({ position, edgeRadius }) => {
  const innerGeometry = CreateInnerGeometry(edgeRadius);
  const meshRef = useBox(() => ({ mass: 1, position: position }));

  return (
    <mesh position={position} geometry={innerGeometry} ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#ffffff"} />
    </mesh>
  );
};

export default InnerBox;
