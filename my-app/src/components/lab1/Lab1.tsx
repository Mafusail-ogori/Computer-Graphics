import { Button, TextField } from "@mui/material";
import { ContentCard } from "../../ui/ContentCard";
import { Task } from "../../models/Task";
import { ChangeEvent, useEffect, useState } from "react";
import { UiVariant } from "../../models/UiVariant";
import {
  calculateVisualizationParameters,
  placeholderUtil,
} from "../../utils/lab1/point";
import { Point } from "../../models/Point";
import { Lab1Plot } from "./Lab1Plot";
import classes from "./Lab1.module.css";
import styles from "../TitlesStyling.module.css";

export const Lab1: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const [activeTask, setActiveTask] = useState<Task>(tasks[0]);
  const [coordinates, setCoordinates] = useState<string>("");
  const [metamorphicMatrix, setMetamorphicMatrix] = useState<string>("");
  const [placeholders, setPlaceholders] = useState<string[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [updatedPoints, setUpdatePoints] = useState<Point[]>([]);

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
    const results = calculateVisualizationParameters(
      metamorphicMatrix,
      coordinates,
      activeTask
    );
    setPoints(results.points);
    setUpdatePoints(results.updatedPoints);
  };

  useEffect(() => {
    setPlaceholders(placeholderUtil(activeTask.inputOption));
  }, [activeTask]);

  return (
    <ContentCard
      variant={UiVariant.Contained}
      className={classes["general-container"]}
    >
      <h1 className={styles["h1-text"]}>2D PLOT</h1>
      <div className={classes["model-container"]}>
        <ContentCard className={classes["input-menu-container"]}>
          <h2 className={styles["h2-text"]}>PARAMETERS</h2>
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
        <Lab1Plot
          className={classes["plot-container"]}
          points={points}
          updatedPoints={updatedPoints}
          activeTask={activeTask}
        />
      </div>
    </ContentCard>
  );
};
