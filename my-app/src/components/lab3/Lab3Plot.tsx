import { Canvas } from "@react-three/fiber";
import { UiVariant } from "../../models/UiVariant";
import { ContentCard } from "../../ui/ContentCard";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Grid } from "../scene/Grid";
import { Plane } from "@react-three/drei";
import { Point3d } from "../../models/Point";
import { Lab3Scenario } from "../../models/InputOption";

export const Lab3Plot: React.FC<{
  coordinates: Point3d;
  rotationAngle?: number[];
  updatedCoordinates: Point3d;
  scenario: Lab3Scenario;
}> = ({ coordinates, rotationAngle, updatedCoordinates, scenario }) => {
  const Dot: React.FC<{ coordinates: Point3d; color?: string }> = ({
    coordinates,
    color,
  }) => (
    <mesh
      position={[
        coordinates.xCoordinate,
        coordinates.yCoordinate,
        coordinates.zCoordinate,
      ]}
    >
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshBasicMaterial color={color ?? 0xfc2b5c} />
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
          <Dot coordinates={coordinates} />
          {Object.values(updatedCoordinates).every((value) => value !== 0) &&
          rotationAngle ? (
            <>
              <Dot coordinates={updatedCoordinates} color={"#3471eb"} />
              <Plane
                args={[5, 5, 5, 5]}
                rotation={[0, Math.PI / 2, 0]}
                position={[
                  updatedCoordinates.xCoordinate,
                  updatedCoordinates.yCoordinate,
                  updatedCoordinates.zCoordinate,
                ]}
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
