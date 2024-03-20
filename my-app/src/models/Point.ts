export interface Point {
  xCoordinate: number;
  yCoordinate: number;
}

export enum PointScenario {
  Matrix = "matrix",
  Point = "point",
}

export interface Point3d {
  xCoordinate: number;
  yCoordinate: number;
  zCoordinate: number;
  dCoordinate: number;
}
