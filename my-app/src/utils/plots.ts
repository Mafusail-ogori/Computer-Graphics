import functionPlot from "function-plot";
import { Point } from "../models/Point";

export const dotPlot = (
  targetContainer: string,
  point: Point[],
  updatePoint: Point[]
) => {
  functionPlot({
    width: 500,
    height: 500,
    target: targetContainer,
    yAxis: {
      domain: [
        (updatePoint[0].yCoordinate + point[0].yCoordinate) / 2 - 10,
        (updatePoint[0].yCoordinate + point[0].yCoordinate) / 2 + 10,
      ],
    },
    xAxis: {
      domain: [
        (updatePoint[0].xCoordinate + point[0].xCoordinate) / 2 - 10,
        (updatePoint[0].xCoordinate + point[0].xCoordinate) / 2 + 10,
      ],
    },
    grid: true,
    data: [
      {
        fn: `(x - ${point[0].xCoordinate})^2 + (y - ${point[0].yCoordinate})^2 - 0.01`,
        fnType: "implicit",
      },
      {
        fn: `(x - ${updatePoint[0].xCoordinate})^2 + (y - ${updatePoint[0].yCoordinate})^2 - 0.01`,
        fnType: "implicit",
      },
    ],
  });
};

export const linePLot = (
  targetContainer: string,
  points: Point[],
  updatedPoints: Point[]
) => {
  functionPlot({
    width: 500,
    height: 500,
    target: targetContainer,
    grid: true,
    yAxis: {
      domain: [-100, 100],
    },
    xAxis: {
      domain: [-100, 100],
    },
    data: [
      {
        points: [
          [points[0].xCoordinate, points[0].yCoordinate],
          [points[1].xCoordinate, points[1].yCoordinate],
        ],
        fnType: "points",
        graphType: "polyline",
      },
      {
        points: [
          [updatedPoints[0].xCoordinate, updatedPoints[0].yCoordinate],
          [updatedPoints[1].xCoordinate, updatedPoints[1].yCoordinate],
        ],
        fnType: "points",
        graphType: "polyline",
      },
    ],
  });
};

export const trianglePlot = (
  targetContainer: string,
  points: Point[],
  updatedPoints: Point[]
) => {
  functionPlot({
    width: 500,
    height: 500,
    target: targetContainer,
    grid: true,
    yAxis: {
      domain: [-10, 10],
    },
    xAxis: {
      domain: [-10, 10],
    },
    data: [
      {
        points: [
          [points[0].xCoordinate, points[0].yCoordinate],
          [points[1].xCoordinate, points[1].yCoordinate],
          [points[2].xCoordinate, points[2].yCoordinate],
          [points[0].xCoordinate, points[2].yCoordinate],
        ],
        fnType: "points",
        graphType: "polyline",
      },
      {
        points: [
          [updatedPoints[0].xCoordinate, updatedPoints[0].yCoordinate],
          [updatedPoints[1].xCoordinate, updatedPoints[1].yCoordinate],
          [updatedPoints[2].xCoordinate, updatedPoints[2].yCoordinate],
          [updatedPoints[0].xCoordinate, updatedPoints[2].yCoordinate],
        ],
        fnType: "points",
        graphType: "polyline",
      },
    ],
  });
};
