import { FunctionComponent } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
type DiceProps = {
  props: object
}

const Dice: FunctionComponent<DiceProps> = ({ props }) => {
  const params = {
    segments: 50,
    edgeRadius: 0.07
  }

  return (
    <>
      <mesh>
        <boxGeometry args={[1, 2, 3]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}

export default Dice
