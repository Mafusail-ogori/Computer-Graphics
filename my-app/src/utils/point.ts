import { InputOption } from "../models/InputOption";
import { Point, PointScenario } from "../models/Point";

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
  const pointRegex = /\((\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\)/;
  const matrixRegex = /\[(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\]/;
  switch (variant) {
    case PointScenario.Point: {
      const match = coordinates.match(pointRegex);
      if (match) {
        return [parseFloat(match[1]), parseFloat(match[2])];
      }
      return [];
    }
    case PointScenario.Matrix: {
      const match = coordinates.match(matrixRegex);
      if (match) {
        return [parseFloat(match[1]), parseFloat(match[2])];
      }
      return [];
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
  return [updatedX, updatedY];
};
