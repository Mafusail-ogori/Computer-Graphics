import { Button, TextField } from "@mui/material";
import { ContentCard } from "../../interface/ContentCard";
import { Task } from "../../models/Task";
import { ChangeEvent, useEffect, useState } from "react";
import { UiVariant } from "../../models/UiVariant";
import classes from "./Lab1.module.css";
import styles from "../TitlesStyling.module.css";
import { dotPlot } from "../../utils/plots";
import {
  calculateUpdatedDotCoordinates,
  placeholderUtil,
  pointUtil,
} from "../../utils/point";
import { Point, PointScenario } from "../../models/Point";

export const Lab1: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const [activeTask, setActiveTask] = useState<Task>(tasks[0]);
  const [coordinates, setCoordinates] = useState<string>("");
  const [metamorphicMatrix, setMetamorphicMatrix] = useState<string>("");
  const [placeholders, setPlaceholders] = useState<string[]>([]);
  const [points, setPoints] = useState<Point[]>([]);

  const taskButtonClickHandler = (task: Task) => {
    setActiveTask(task);
    setCoordinates("");
    setMetamorphicMatrix("");
  };

  const coordinatesChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCoordinates(event.target.value);
  };

  const metamorphicMatrixChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setMetamorphicMatrix(event.target.value);
  };

  const calculateButtonClickHandler = () => {
    const point: number[] = pointUtil(coordinates, PointScenario.Point);
    const matrix: number[][] = metamorphicMatrix.split(";").map((chunk) => {
      return pointUtil(chunk, PointScenario.Matrix);
    });
    const updatedPoint: number[] = calculateUpdatedDotCoordinates(
      { xCoordinate: point[0], yCoordinate: point[1] },
      [
        { xCoordinate: matrix[0][0], yCoordinate: matrix[0][1] },
        { xCoordinate: matrix[1][0], yCoordinate: matrix[1][1] },
      ]
    );
    setPoints([
      { xCoordinate: point[0], yCoordinate: point[1] },
      { xCoordinate: updatedPoint[0], yCoordinate: updatedPoint[1] },
    ]);
  };
  console.log(points);

  useEffect(() => {
    setPlaceholders(placeholderUtil(activeTask.inputOption));
  }, [activeTask]);

  return (
    <ContentCard
      variant={UiVariant.Contained}
      className={classes["general-container"]}
    >
      <ContentCard className={classes["input-menu-container"]}>
        <h1 className={styles["h1-text"]}>2D TRANSLATOR</h1>
        <div className={classes["buttons-container"]}>
          {tasks.map((task: Task, index: number) => (
            <Button
              key={index}
              onClick={() => taskButtonClickHandler(task)}
              variant={UiVariant.Contained}
            >
              {task.taskName}
            </Button>
          ))}
        </div>
        {activeTask ? (
          <div className={classes["input-container"]}>
            <TextField
              variant={UiVariant.Outlined}
              onChange={coordinatesChangeHandler}
              value={coordinates}
              placeholder={placeholders[0]}
              label={"Coordinates"}
            />
            <TextField
              variant={UiVariant.Outlined}
              onChange={metamorphicMatrixChangeHandler}
              value={metamorphicMatrix}
              placeholder={placeholders[1]}
              label={"Matrix"}
            />
          </div>
        ) : null}
        <Button
          variant={UiVariant.Contained}
          onClick={calculateButtonClickHandler}
        >
          Calculate
        </Button>
      </ContentCard>
      <ContentCard className={classes["plot-container"]} id="plot-container">
        <h1 className={styles["h1-text"]}>CALCULATED PLOT</h1>
        <p>{activeTask.inputOption}</p>
        {points.length > 0 ? dotPlot("#plot-container", points) : null}
      </ContentCard>
    </ContentCard>
  );
};
