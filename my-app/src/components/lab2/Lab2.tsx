import { UiVariant } from "../../models/UiVariant";
import { ContentCard } from "../../ui/ContentCard";
import styles from "../TitlesStyling.module.css";
import classes from "./Lab2.module.css";
import { Lab2Plot } from "./Lab2Plot";
import { useState } from "react";
import { Controls } from "./Controls";
import { Pointer } from "../../models/Pointer";

export const Lab2: React.FC<{}> = ({}) => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [zPosition, setZPosition] = useState(0);

  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);

  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [zScale, setZScale] = useState(1);

  const pointer: Pointer = {
    xRotation: xRotation,
    yRotation: yRotation,
    zRotation: zRotation,
    xPosition: xPosition,
    yPosition: yPosition,
    zPosition: zPosition,
    xScale: xScale,
    yScale: yScale,
    zScale: zScale,
  };
  return (
    <ContentCard
      variant={UiVariant.Contained}
      className={classes["lab2-container"]}
    >
      <div>
        <h1 className={styles["h1-text"]}>3D PLOT</h1>
        <Controls
          controls={{
            xPosition,
            yPosition,
            zPosition,
            xRotation,
            yRotation,
            zRotation,
            xScale,
            yScale,
            zScale,
            setXPosition,
            setYPosition,
            setZPosition,
            setXRotation,
            setYRotation,
            setZRotation,
            setXScale,
            setYScale,
            setZScale,
          }}
        />
      </div>

      <Lab2Plot pointer={pointer} />
    </ContentCard>
  );
};
