import { Vec2 } from "../src/vec2";

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

test("add", () => {
  const v0 = new Vec2(1, 2);
  const v1 = new Vec2(3, 4);
  const v2 = new Vec2(4, 6);
  expect(v0.add(v1).equals(v2)).toBe(true);
});

test("sub", () => {
  const v0 = new Vec2(1, 2);
  const v1 = new Vec2(3, 4);
  const v2 = new Vec2(-2, -2);
  expect(v0.sub(v1).equals(v2)).toBe(true);
});

test("mul", () => {
  const v0 = new Vec2(1, 2);
  const v1 = new Vec2(2, 4);
  expect(v0.mul(2).equals(v1)).toBe(true);
});

test("div", () => {
  const v0 = new Vec2(3, 6);
  const v1 = new Vec2(1, 2);
  expect(v0.div(3).equals(v1)).toBe(true);
});

test("dot", () => {
  const v0 = new Vec2(1, 2);
  const v1 = new Vec2(3, 4);
  expect(v0.dot(v1)).toBe(11);
});

test("cross", () => {
  expect(Vec2.X_AXIS.cross(Vec2.Y_AXIS)).toBe(1);
  expect(Vec2.Y_AXIS.cross(Vec2.X_AXIS)).toBe(-1);
});

test("norm", () => {
  expect(Vec2.ZERO.norm()).toBe(0);
  expect(Vec2.X_AXIS.norm()).toBe(1);
  expect(Vec2.Y_AXIS.norm()).toBe(1);
  expect(new Vec2(3, 4).norm()).toBe(5);
});

test("normalize", () => {
  const v = new Vec2(3, 4);
  expect(v.norm()).toBe(5);
  expect(v.normalized().norm()).toBe(1);
});
