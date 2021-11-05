"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2 = void 0;
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.equals = function (v) {
        return this.x === v.x && this.y === v.y;
    };
    Vec2.prototype.add = function (v) {
        return new Vec2(this.x + v.x, this.y + v.y);
    };
    Vec2.prototype.sub = function (v) {
        return new Vec2(this.x - v.x, this.y - v.y);
    };
    Vec2.prototype.mul = function (x) {
        return new Vec2(this.x * x, this.y * x);
    };
    Vec2.prototype.div = function (x) {
        return new Vec2(this.x / x, this.y / x);
    };
    Vec2.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y;
    };
    Vec2.prototype.cross = function (v) {
        return this.x * v.y - this.y * v.x;
    };
    Vec2.prototype.norm2 = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vec2.prototype.norm = function () {
        return Math.sqrt(this.norm2());
    };
    Vec2.prototype.normalized = function () {
        return this.div(this.norm());
    };
    Vec2.ZERO = new Vec2(0, 0);
    Vec2.X_AXIS = new Vec2(1, 0);
    Vec2.Y_AXIS = new Vec2(0, 1);
    return Vec2;
}());
exports.Vec2 = Vec2;
//# sourceMappingURL=vec2.js.map