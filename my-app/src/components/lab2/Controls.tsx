import React from "react";
import { ContentCard } from "../../ui/ContentCard";
import { UiVariant } from "../../models/UiVariant";
import classes from "./Controls.module.css";
import styles from "../TitlesStyling.module.css";
import { TextField } from "@mui/material";

interface ControlsProps {
  controls: {
    xRotation: number;
    yRotation: number;
    zRotation: number;
    xPosition: number;
    yPosition: number;
    zPosition: number;
    xScale: number;
    yScale: number;
    zScale: number;
    setXRotation: (value: number) => void;
    setYRotation: (value: number) => void;
    setZRotation: (value: number) => void;
    setXPosition: (value: number) => void;
    setYPosition: (value: number) => void;
    setZPosition: (value: number) => void;
    setXScale: (value: number) => void;
    setYScale: (value: number) => void;
    setZScale: (value: number) => void;
  };
}

export const Controls: React.FC<ControlsProps> = ({ controls }) => {
  const {
    xRotation,
    yRotation,
    zRotation,
    xPosition,
    yPosition,
    zPosition,
    xScale,
    yScale,
    zScale,
    setXRotation,
    setYRotation,
    setZRotation,
    setXPosition,
    setYPosition,
    setZPosition,
    setXScale,
    setYScale,
    setZScale,
  } = controls;

  return (
    <ContentCard
      variant={UiVariant.Outlined}
      className={classes["controls-container"]}
    >
      <h2 className={styles["h2-text"]}>ENTER CUBE SETTINGS</h2>
      <TextField
        value={xPosition}
        onChange={(e) => setXPosition(+e.target.value)}
        label="X Position"
      />
      <TextField
        value={yPosition}
        onChange={(e) => setYPosition(+e.target.value)}
        label="Y Position"
      />
      <TextField
        value={zPosition}
        onChange={(e) => setZPosition(+e.target.value)}
        label="Z Position"
      />
      <TextField
        value={xRotation}
        onChange={(e) => setXRotation(+e.target.value)}
        label="X Rotation"
      />
      <TextField
        value={yRotation}
        onChange={(e) => setYRotation(+e.target.value)}
        label="Y Rotation"
      />
      <TextField
        value={zRotation}
        onChange={(e) => setZRotation(+e.target.value)}
        label="Z Rotation"
      />
      <TextField
        value={xScale}
        onChange={(e) => setXScale(+e.target.value)}
        label="X Scale"
      />
      <TextField
        value={yScale}
        onChange={(e) => setYScale(+e.target.value)}
        label="Y Scale"
      />
      <TextField
        value={zScale}
        onChange={(e) => setZScale(+e.target.value)}
        label="Z Scale"
      />
    </ContentCard>
  );
};
