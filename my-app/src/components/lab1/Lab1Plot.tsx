import { Point } from "../../models/Point";
import { ContentCard } from "../../interface/ContentCard";
import { Task } from "../../models/Task";
import { InputOption } from "../../models/InputOption";
import { dotPlot, linePLot } from "../../utils/plots";
import styles from "../TitlesStyling.module.css";

export const Lab1Plot: React.FC<{
  className?: string;
  points: Point[];
  updatedPoints: Point[];
  activeTask: Task;
}> = ({ className, points, updatedPoints, activeTask }) => {
  return (
    <ContentCard className={className} id="plot-container">
      <h2 className={styles["h2-text"]}>CALCULATED PLOT</h2>
      <h3 className={styles["h3-text"]}>
        {activeTask.inputOption.toUpperCase()}
      </h3>
      {activeTask.inputOption === InputOption.Dot && points.length > 0
        ? dotPlot("#plot-container", points, updatedPoints)
        : null}
      {activeTask.inputOption === InputOption.Line && points.length > 1
        ? linePLot("#plot-container", points, updatedPoints)
        : null}
      {activeTask.inputOption === InputOption.Triangle ? null : null}
    </ContentCard>
  );
};