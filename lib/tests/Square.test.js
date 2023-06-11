const Square = require('../classes/Square');
// Test if a new instance of square is created
test('Instantiate', () => {
    const square = new Square();
    expect(square).toBeInstanceOf(Square);
});
// Test if shape is correctly assigned to every instance of Square
test('Initialize shape', () => {
    const shape = 'square'
    const square = new Square(shape);
    expect(square.shape).toBe(shape);
});
// Test if fill is correctly assigned to every instance of Square
test('Initialize fill', () => {
    const fill = 'green'
    const square = new Square('square', fill);
    expect(square.fill).toBe(fill);
});
// Test if textColor is correctly assigned to every instance of Square
test('Initialize textColor', () => {
    const textColor = 'yellow'
    const square = new Square('square', 'green', textColor);
    expect(square.textColor).toBe(textColor);
});
// Test if text is correctly assigned to every instance of Square
test('Initialize text', () => {
    const text = 'square text'
    const square = new Square('square', 'green', 'yellow', text);
    expect(square.text).toBe(text);
});
// Test if the setColor() method is inherited and correctly changes the fill
test('setColor() method', () => {
    const newFill = 'red'
    const square = new Square('square', 'green', 'yellow', 'square text');
    square.setColor(newFill);
    expect(square.fill).toBe('red');
});
// Test if the render() method has the correct output in every instance of square
test('render() method', () => {
    const square = new Square('square', 'green', 'yellow', 'square text');
    const writeToSVG = square.render();
    // render() is definining all components of svgParams, but I need to re-define them here in order for the test to be able to compare them to those defined by render() due to scope.
    let svgTopTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n`
    let shapeAndFill = `\t<rect x="100" y="50" width="100" height="100" fill="${square.fill}" />`
    let textAndTextColor = `\n\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text>`
    let svgBottomTag = `\n\n</svg>`
    let svgParams = `${svgTopTag}${shapeAndFill}${textAndTextColor}${svgBottomTag}`;
    // This is comparing the output of square.render() to svgParams defined above.
    expect(writeToSVG).toBe(svgParams);
});