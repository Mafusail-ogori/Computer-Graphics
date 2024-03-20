import { Button, TextField } from "@mui/material";
import { UiVariant } from "../../models/UiVariant";
import { ContentCard } from "../../ui/ContentCard";
import { Lab3Plot } from "./Lab3Plot";
import { ChangeEvent, useState } from "react";
import styles from "../TitlesStyling.module.css";
import classes from "./Lab3.module.css";
import { Point3d } from "../../models/Point";

export const Lab3 = () => {
  const [coordinates, setCoordinates] = useState<Point3d>({
    xCoordinate: 0,
    yCoordinate: 0,
    zCoordinate: 0,
    dCoordinate: 0,
  });
  const [angles, setAngles] = useState<number[]>([0, 0]);

  const coordinatesInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCoordinates: number[] = event.target.value
      .split(",")
      .map((chunk) => +chunk);
    setCoordinates({
      xCoordinate: updatedCoordinates[0],
      yCoordinate: updatedCoordinates[1],
      zCoordinate: updatedCoordinates[2],
      dCoordinate: updatedCoordinates[3],
    });
  };

  const anglesInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAngles(event.target.value.split(",").map((chunk) => +chunk));
  };

  return (
    <ContentCard
      variant={UiVariant.Contained}
      className={classes["general-container"]}
    >
      <div>
        <h1 className={styles["h1-text"]}>POINT TRANSLATION</h1>
        <ContentCard
          variant={UiVariant.Outlined}
          className={classes["controls-container"]}
        >
          <div className={classes["button-menu-container"]}>
            <Button variant={UiVariant.Contained}>Parallel Projection</Button>
            <Button variant={UiVariant.Contained}>Oblique Projection</Button>
          </div>
          <TextField
            variant={UiVariant.Outlined}
            label={"Dots Coordinates"}
            placeholder={"9, 2, 4, 5"}
            onChange={coordinatesInputHandler}
          />
          <TextField
            variant={UiVariant.Outlined}
            label={"Angles (Ox / projection)"}
            placeholder={"12, 30"}
            onChange={anglesInputHandler}
          />
          <Button variant={UiVariant.Contained}>Calculate</Button>
        </ContentCard>
      </div>

      <Lab3Plot updatedPoint={coordinates} rotationAngle={angles} />
    </ContentCard>
  );
};
