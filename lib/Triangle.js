// Import ShapesParent constructor class
const ShapesParent = require('./ShapesParent')
// Triangle is to inherit from ShapesParent 
class Triangle extends ShapesParent {
    // Define constructor the same but define which parameters will be inherited.
    constructor(shape, fill, textColor, text) {
        super(shape, fill, textColor, text)
    }
    // generate() is a method defined in Triangle that defines parts of a string that will be returned and written to an svg file.
    generate() {
        let svgTopTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n`
        let shapeAndFill = `\t<polygon points="150,50 250,150 50,150" fill="${this.fill}" />`
        let textAndTextColor = `\n\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        let svgBottomTag = `\n\n</svg>`
        let svgParams = `${svgTopTag}${shapeAndFill}${textAndTextColor}${svgBottomTag}`;
        return svgParams;
    }
}
  
module.exports = Triangle;