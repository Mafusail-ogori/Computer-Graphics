import { InputOption } from "../../models/InputOption";
import { Point, Point3d, PointScenario } from "../../models/Point";
import { Task } from "../../models/Task";

export const placeholderUtil = (inputOption: InputOption) => {
  switch (inputOption) {
    case InputOption.Dot: {
      return [
        "Enter coordinates of dot (9, 9.6)",
        "Enter metamorphic matrix (comma separated)",
      ];
    }
    case InputOption.Line: {
      return [
        "Enter coordinates of two dots (9, 9.6) ; (9, 7)",
        "Enter metamorphic matrix (comma separated)",
      ];
    }
    case InputOption.Triangle: {
      return [
        "Enter coordinates of three dots (9, 9.6) ; (9, 7) ; (12.4, 2,3)",
        "Enter metamorphic matrix (comma separated)",
      ];
    }
  }
};
export const pointUtil = (coordinates: string, variant: PointScenario) => {
  const pointRegex = /\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\)/;
  const matrixRegex = /\[(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\]/;
  switch (variant) {
    case PointScenario.Point: {
      const match = coordinates.match(pointRegex);
      if (match) {
        return {
          xCoordinate: parseFloat(match[1]),
          yCoordinate: parseFloat(match[2]),
        };
      }
      return {
        xCoordinate: 0,
        yCoordinate: 0,
      };
    }
    case PointScenario.Matrix: {
      const match = coordinates.match(matrixRegex);
      if (match) {
        return {
          xCoordinate: parseFloat(match[1]),
          yCoordinate: parseFloat(match[2]),
        };
      }
      return {
        xCoordinate: 0,
        yCoordinate: 0,
      };
    }
  }
};

export const calculateUpdatedDotCoordinates = (
  point: Point,
  matrix: Point[]
) => {
  const updatedX =
    point.xCoordinate * matrix[0].xCoordinate +
    point.xCoordinate * matrix[1].xCoordinate;
  const updatedY =
    point.yCoordinate * matrix[0].yCoordinate +
    point.yCoordinate * matrix[1].yCoordinate;
  return { xCoordinate: updatedX, yCoordinate: updatedY };
};

export const calculateVisualizationParameters = (
  metamorphicMatrix: string,
  coordinates: string,
  activeTask: Task
) => {
  const matrix: Point[] = metamorphicMatrix.split(";").map((chunk: string) => {
    return pointUtil(chunk, PointScenario.Matrix);
  });
  switch (activeTask.inputOption) {
    case InputOption.Dot: {
      const point: Point = pointUtil(coordinates, PointScenario.Point);
      const updatedPoint: Point = calculateUpdatedDotCoordinates(point, matrix);
      return {
        points: [point],
        updatedPoints: [updatedPoint],
      };
    }
    case InputOption.Line:
    case InputOption.Triangle: {
      const points: Point[] = coordinates.split(";").map((chunk: string) => {
        return pointUtil(chunk, PointScenario.Point);
      });
      const updatedPoints: Point[] = points.map((point: Point) => {
        return calculateUpdatedDotCoordinates(point, matrix);
      });
      return {
        points: points,
        updatedPoints: updatedPoints,
      };
    }
  }
};

export const calculateUpdatedPointParallel = (
  point: Point3d,
  distance: number
) => {
  const updatedXCoordinate: number =
    point.xCoordinate / (point.zCoordinate / distance);
  const updatedYCoordinate: number =
    point.yCoordinate / (point.zCoordinate / distance);

  return {
    xCoordinate: updatedXCoordinate,
    yCoordinate: updatedYCoordinate,
    zCoordinate: point.zCoordinate,
  };
};

export const calculateUpdatedPointOblique = (
  point: Point3d,
  distance: number,
  angles: number[]
) => {
  const updatedXCoordinate: number =
    point.xCoordinate +
    (distance / Math.tan((angles[1] * Math.PI) / 180)) *
      Math.cos((angles[0] * Math.PI) / 180);
  const updatedYCoordinate: number =
    point.yCoordinate +
    (distance / Math.tan((angles[1] * Math.PI) / 180)) *
      Math.sin((angles[0] * Math.PI) / 180);

  return {
    xCoordinate: updatedXCoordinate,
    yCoordinate: updatedYCoordinate,
    zCoordinate: point.zCoordinate,
  };
};
