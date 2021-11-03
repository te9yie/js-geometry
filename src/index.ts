export class Vec2 {
  static ZERO: Vec2 = new Vec2(0, 0);
  static X_AXIS: Vec2 = new Vec2(1, 0);
  static Y_AXIS: Vec2 = new Vec2(0, 1);

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  equals(v: Vec2): boolean {
    return this.x === v.x && this.y === v.y;
  }
}
