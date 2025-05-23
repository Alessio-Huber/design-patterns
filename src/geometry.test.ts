import { RectangleAdapter, Square } from "./geometry";
import { Calculator, Rectangle } from "./geometry.third-party";

test("RectangleAdapter adapts Quadratic as a Rectangular object", () => {
  const square = new Square(3);
  const adapted = new RectangleAdapter(square);
  expect(Calculator.getArea(adapted)).toBeCloseTo(9);
  expect(Calculator.getPerimeter(adapted)).toBeCloseTo(12);
  expect(Calculator.getDiagonal(adapted)).toBeCloseTo(Math.sqrt(18));
});

test("Calculator returns correct width-height ratio for Square and Rectangle", () => {
  const square = new Square(4);
  const adaptedSquare = new RectangleAdapter(square);
  expect(Calculator.getWidthHeightRatio(adaptedSquare)).toBeCloseTo(1.0);

  const rectangle = new Rectangle(6, 3);
  expect(Calculator.getWidthHeightRatio(rectangle)).toBeCloseTo(2.0);
});