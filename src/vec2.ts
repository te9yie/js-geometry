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

  add(v: Vec2): Vec2 {
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  sub(v: Vec2): Vec2 {
    return new Vec2(this.x - v.x, this.y - v.y);
  }

  mul(x: number): Vec2 {
    return new Vec2(this.x * x, this.y * x);
  }

  div(x: number): Vec2 {
    return new Vec2(this.x / x, this.y / x);
  }

  dot(v: Vec2): number {
    return this.x * v.x + this.y * v.y;
  }

  cross(v: Vec2): number {
    return this.x * v.y - this.y * v.x;
  }

  norm2(): number {
    return this.x * this.x + this.y * this.y;
  }

  norm(): number {
    return Math.sqrt(this.norm2());
  }

  normalized(): Vec2 {
    return this.div(this.norm());
  }
}
