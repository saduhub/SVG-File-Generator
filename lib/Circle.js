const ShapesParent = require('./ShapesParent')

class Circle extends ShapesParent {
    // TODO
    constructor(shape, fill, textColor, text) {
        super(shape, fill, textColor, text)
    }
    generate() {
        let svgTopTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n`
        let shapeAndFill = `\t<${this.shape} cx="150" cy="100" r="80" fill="${this.fill}" />`
        let textAndTextColor = `\n\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        let svgBottomTag = `\n\n</svg>`
        let svgParams = `${svgTopTag}${shapeAndFill}${textAndTextColor}${svgBottomTag}`;
        return svgParams;
    }
}
  
module.exports = Circle;