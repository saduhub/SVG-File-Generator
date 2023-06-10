const Triangle = require('./Triangle');
// Test if a new instance of triangle is created
test('Instantiate', () => {
    const triangle = new Triangle();
    expect(triangle).toBeInstanceOf(Triangle);
});
// Test if shape is correctly assigned to every instance of Triangle
test('Initialize shape', () => {
    const shape = 'triangle'
    const triangle = new Triangle(shape);
    expect(triangle.shape).toBe(shape);
});
// Test if fill is correctly assigned to every instance of Triangle
test('Initialize fill', () => {
    const fill = 'green'
    const triangle = new Triangle('triangle', fill);
    expect(triangle.fill).toBe(fill);
});
// Test if textColor is correctly assigned to every instance of Triangle
test('Initialize textColor', () => {
    const textColor = 'yellow'
    const triangle = new Triangle('triangle', 'green', textColor);
    expect(triangle.textColor).toBe(textColor);
});
// Test if text is correctly assigned to every instance of Triangle
test('Initialize text', () => {
    const text = 'triangle text'
    const triangle = new Triangle('triangle', 'green', 'yellow', text);
    expect(triangle.text).toBe(text);
});
// Test if the setColor() method is inherited and correctly changes the fill
test('setColor() method', () => {
    const newFill = 'red'
    const triangle = new Triangle('triangle', 'green', 'yellow', 'triangle text');
    triangle.setColor(newFill);
    expect(triangle.fill).toBe('red');
});
// Test if the render() method has the correct output in every instance of triangle
test('render() method', () => {
    const triangle = new Triangle('triangle', 'green', 'yellow', 'triangle text');
    const writeToSVG = triangle.render();
    // render() is definining all components of svgParams, but I need to re-define them here in order for the test to be able to compare them to those defined by render() due to scope.
    let svgTopTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n`
    let shapeAndFill = `\t<polygon points="150,50 250,150 50,150" fill="${triangle.fill}" />`
    let textAndTextColor = `\n\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text>`
    let svgBottomTag = `\n\n</svg>`
    let svgParams = `${svgTopTag}${shapeAndFill}${textAndTextColor}${svgBottomTag}`;
    // This is comparing the output of triangle.render() to svgParams defined above.
    expect(writeToSVG).toBe(svgParams);
});