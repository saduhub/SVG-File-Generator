class ShapesParent {
    // TODO
    constructor(shape, fill, textColor, text) {
        this.shape = shape;
        this.textColor = textColor;
        this.text = text;
        this.fill = fill;
    }
    setColor(newFill) {
        this.fill = newFill;
    }
}

module.exports = ShapesParent;