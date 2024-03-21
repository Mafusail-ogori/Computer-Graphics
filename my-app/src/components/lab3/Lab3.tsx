import { Button, TextField } from "@mui/material";
import { UiVariant } from "../../models/UiVariant";
import { ContentCard } from "../../ui/ContentCard";
import { Lab3Plot } from "./Lab3Plot";
import { ChangeEvent, useState } from "react";
import styles from "../TitlesStyling.module.css";
import classes from "./Lab3.module.css";
import { Point3d } from "../../models/Point";
import { Lab3Scenario } from "../../models/InputOption";
import {
  calculateUpdatedPointOblique,
  calculateUpdatedPointParallel,
} from "../../utils/lab1/point";

export const Lab3: React.FC<{ scenarios: Lab3Scenario[] }> = ({
  scenarios,
}) => {
  const [coordinates, setCoordinates] = useState<Point3d>({
    xCoordinate: 0,
    yCoordinate: 0,
    zCoordinate: 0,
  });

  const [updatedCoordinates, setUpdatedCoordinates] = useState<Point3d>({
    xCoordinate: 0,
    yCoordinate: 0,
    zCoordinate: 0,
  });

  const [angles, setAngles] = useState<number[]>([0, 0]);
  const [distance, setDistance] = useState<number>(0);

  const [activeScenario, setActiveScenario] = useState<Lab3Scenario>(
    Lab3Scenario.Parallel
  );

  const scenarioClickHandler = (activeScenario: Lab3Scenario) => {
    setActiveScenario(activeScenario);
  };

  const coordinatesInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCoordinates: number[] = event.target.value
      .split(",")
      .map((chunk) => +chunk);
    setCoordinates({
      xCoordinate: updatedCoordinates[0],
      yCoordinate: updatedCoordinates[1],
      zCoordinate: updatedCoordinates[2],
    });
  };

  const distanceInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDistance(+event.target.value);
  };

  const anglesInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAngles(event.target.value.split(",").map((chunk) => +chunk));
  };

  const calculateUpdatedPointClickHandler = () => {
    switch (activeScenario) {
      case Lab3Scenario.Parallel: {
        setUpdatedCoordinates(
          calculateUpdatedPointParallel(coordinates, distance)
        );
        break;
      }
      case Lab3Scenario.Oblique: {
        setUpdatedCoordinates(
          calculateUpdatedPointOblique(coordinates, distance, angles)
        );
        break;
      }
    }
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
            {scenarios.map((scenario: Lab3Scenario) => (
              <Button
                variant={UiVariant.Contained}
                onClick={() => scenarioClickHandler(scenario)}
              >
                {scenario}
              </Button>
            ))}
          </div>
          <TextField
            variant={UiVariant.Outlined}
            label={"Dot Initial Coordinates"}
            placeholder={"3, 2, 4"}
            onChange={coordinatesInputHandler}
          />
          <TextField
            variant={UiVariant.Outlined}
            label={"Distance"}
            placeholder={"9"}
            onChange={distanceInputHandler}
          />
          {activeScenario === Lab3Scenario.Oblique ? (
            <TextField
              variant={UiVariant.Outlined}
              label={"Angles (Ox / projection)"}
              placeholder={"12, 30"}
              onChange={anglesInputHandler}
            />
          ) : null}
          <Button
            variant={UiVariant.Contained}
            onClick={calculateUpdatedPointClickHandler}
          >
            Calculate
          </Button>
        </ContentCard>
      </div>
      <Lab3Plot
        scenario={activeScenario}
        coordinates={coordinates}
        rotationAngle={angles}
        updatedCoordinates={updatedCoordinates}
      />
    </ContentCard>
  );
};
