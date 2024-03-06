import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { Grid } from "./Grid";
import { ContentCard } from "../../ui/ContentCard";
import { UiVariant } from "../../models/UiVariant";
import { Pointer } from "../../models/Pointer";

interface CubeProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
  handleClick: () => void;
}

const Cube: React.FC<CubeProps> = ({
  position,
  rotation,
  scale = [1, 1, 1],
  handleClick,
}) => (
  <Box
    args={[1, 1, 1]}
    position={position}
    rotation={rotation}
    scale={scale}
    onClick={handleClick}
  >
    <meshStandardMaterial attach="material" color={0xfc2b5c} />
  </Box>
);

export const Lab2Plot: React.FC<{ pointer: Pointer }> = ({ pointer }) => {
  console.log(pointer.xRotation, pointer.yRotation, pointer.zRotation);
  return (
    <ContentCard variant={UiVariant.Outlined}>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <Suspense fallback={<Text color="white">Loading</Text>}>
          <OrbitControls />
          <directionalLight intensity={1} position={[6, 2, 1]} />
          <ambientLight intensity={1} />
          <Grid size={10} />
          <Cube
            handleClick={() => console.log("clicked on the cube")}
            rotation={[
              (pointer.xRotation * Math.PI) / 100,
              (pointer.yRotation * Math.PI) / 100,
              (pointer.zRotation * Math.PI) / 100,
            ]}
            position={[pointer.xPosition, pointer.yPosition, pointer.zPosition]}
            scale={[pointer.xScale, pointer.yScale, pointer.zScale]}
          />
        </Suspense>
      </Canvas>
    </ContentCard>
  );
};
