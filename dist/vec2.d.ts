export declare class Vec2 {
    static ZERO: Vec2;
    static X_AXIS: Vec2;
    static Y_AXIS: Vec2;
    x: number;
    y: number;
    constructor(x: number, y: number);
    equals(v: Vec2): boolean;
    add(v: Vec2): Vec2;
    sub(v: Vec2): Vec2;
    mul(x: number): Vec2;
    div(x: number): Vec2;
    dot(v: Vec2): number;
    cross(v: Vec2): number;
    norm2(): number;
    norm(): number;
    normalized(): Vec2;
}
