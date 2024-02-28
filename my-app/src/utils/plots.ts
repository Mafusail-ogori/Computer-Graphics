import functionPlot from "function-plot";
import { Point } from "../models/Point";

export const dotPlot = (targetContainer: string, point: Point[]) => {
  functionPlot({
    width: 500,
    height: 500,
    target: targetContainer,
    yAxis: {
      domain: [
        (point[1].yCoordinate + point[0].yCoordinate) / 2 - 100,
        (point[1].yCoordinate + point[0].yCoordinate) / 2 + 100,
      ],
    },
    xAxis: {
      domain: [
        (point[1].xCoordinate + point[0].xCoordinate) / 2 - 100,
        (point[1].xCoordinate + point[0].xCoordinate) / 2 + 100,
      ],
    },
    grid: true,
    data: [
      {
        fn: `(x - ${point[0].xCoordinate})^2 + (y - ${point[0].yCoordinate})^2 - 0.2`,
        fnType: "implicit",
      },
      {
        fn: `(x - ${point[1].xCoordinate})^2 + (y - ${point[1].yCoordinate})^2 - 0.2`,
        fnType: "implicit",
      },
    ],
  });
};

export const linePLot = (targetContainer: string, points: Point[]) => {
  functionPlot({
    width: 500,
    height: 500,
    target: targetContainer,
  });
};
