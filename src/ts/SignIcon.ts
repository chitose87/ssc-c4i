export class SignIcon {
    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
        this.$el.setAttributeNS("", "cy", `${this._y}`);
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
        this.$el.setAttributeNS("", "cx", `${this._x}`);
    }

    $el: SVGCircleElement;
    private _x: number = 0;
    private _y: number = 0;

    constructor() {
        this.$el = <SVGCircleElement>document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        // this.$el.$class = this;

        this.$el.setAttributeNS("", "r", "10");
        this.$el.setAttributeNS("", "fill", "red");
    }
}