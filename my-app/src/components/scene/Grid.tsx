import { Plane, Text } from "@react-three/drei";

interface GridProps {
  size: number;
}

const XZPlane: React.FC<GridProps> = ({ size }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[1.5 * Math.PI, 0, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color={0x39b6c6} wireframe />
  </Plane>
);

const XYPlane: React.FC<GridProps> = ({ size }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[0, 0, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color={0xc639b6} wireframe />
  </Plane>
);

const YZPlane: React.FC<GridProps> = ({ size }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[0, Math.PI / 2, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color={0xb6c639} wireframe />
  </Plane>
);

export const Grid: React.FC<GridProps> = ({ size }) => (
  <group>
    <Text
      color={0x1976d2}
      anchorX="center"
      anchorY="middle"
      position={[size / 2 + 1, 0, 0]}
      scale={[1, 1, 1]}
    >
      X+
    </Text>
    <Text
      color={0x1976d2}
      anchorX="center"
      anchorY="middle"
      position={[-size / 2 - 1, 0, 0]}
      scale={[1, 1, 1]}
    >
      X-
    </Text>
    <Text
      color={0x1976d2}
      anchorX="center"
      anchorY="middle"
      position={[0, size / 2 + 1, 0]}
      scale={[1, 1, 1]}
    >
      Y+
    </Text>
    <Text
      color={0x1976d2}
      anchorX="center"
      anchorY="middle"
      position={[0, -size / 2 - 1, 0]}
      scale={[1, 1, 1]}
    >
      Y-
    </Text>
    <Text
      color={0x1976d2}
      anchorX="center"
      anchorY="middle"
      position={[0, 0, size / 2 + 1]}
      scale={[1, 1, 1]}
    >
      Z+
    </Text>
    <Text
      color={0x1976d2}
      anchorX="center"
      anchorY="middle"
      position={[0, 0, -size / 2 - 1]}
      scale={[1, 1, 1]}
    >
      Z-
    </Text>
    <XZPlane size={size} />
    <XYPlane size={size} />
    <YZPlane size={size} />
  </group>
);
