import { Vec2 } from "../src/index";

test("ZERO", () => {
  expect(Vec2.ZERO.x).toBe(0);
  expect(Vec2.ZERO.y).toBe(0);
});

test("X_AXIS", () => {
  expect(Vec2.X_AXIS.x).toBe(1);
  expect(Vec2.X_AXIS.y).toBe(0);
});

test("Y_AXIS", () => {
  expect(Vec2.Y_AXIS.x).toBe(0);
  expect(Vec2.Y_AXIS.y).toBe(1);
});

test("equals", () => {
  expect(Vec2.ZERO.equals(Vec2.ZERO)).toBe(true);
  expect(Vec2.ZERO.equals(Vec2.X_AXIS)).toBe(false);
  expect(Vec2.ZERO.equals(Vec2.Y_AXIS)).toBe(false);
});
