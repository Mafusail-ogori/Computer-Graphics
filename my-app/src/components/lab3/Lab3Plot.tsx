import { Canvas } from "@react-three/fiber";
import { UiVariant } from "../../models/UiVariant";
import { ContentCard } from "../../ui/ContentCard";
import { Suspense } from "react";
import { OrbitControls, Point } from "@react-three/drei";
import { Grid } from "../scene/Grid";
import { Plane } from "@react-three/drei";
import { Point3d } from "../../models/Point";

export const Lab3Plot: React.FC<{
  updatedPoint?: Point3d;
  rotationAngle?: number[];
}> = ({ updatedPoint, rotationAngle }) => {
  const Dot = () => (
    <mesh>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshBasicMaterial color={0xfc2b5c} />
    </mesh>
  );
  return (
    <ContentCard variant={UiVariant.Outlined}>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <Suspense>
          <OrbitControls />
          <directionalLight intensity={1} position={[6, 2, 1]} />
          <ambientLight intensity={1} />
          <Grid size={10} />
          <Dot />
          {updatedPoint && rotationAngle ? (
            <>
              <Point />
              <Plane
                args={[5, 5, 5, 5]}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
              >
                <meshStandardMaterial
                  attach="material"
                  color={0xf5c842}
                  wireframe
                />
              </Plane>
            </>
          ) : null}
        </Suspense>
      </Canvas>
    </ContentCard>
  );
};
