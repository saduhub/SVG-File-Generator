const Circle = require('./Circle');
// Test if a new instance of circle is created
test('Instantiate', () => {
    const circle = new Circle();
    expect(circle).toBeInstanceOf(Circle);
});
// Test if shape is correctly assigned to every instance of Circle
test('Initialize shape', () => {
    const shape = 'circle'
    const circle = new Circle(shape);
    expect(circle.shape).toBe(shape);
});
// Test if fill is correctly assigned to every instance of Circle
test('Initialize fill', () => {
    const fill = 'green'
    const circle = new Circle('circle', fill);
    expect(circle.fill).toBe(fill);
});
// Test if textColor is correctly assigned to every instance of Circle
test('Initialize textColor', () => {
    const textColor = 'yellow'
    const circle = new Circle('circle', 'green', textColor);
    expect(circle.textColor).toBe(textColor);
});
// Test if text is correctly assigned to every instance of Circle
test('Initialize text', () => {
    const text = 'circle text'
    const circle = new Circle('circle', 'green', 'yellow', text);
    expect(circle.text).toBe(text);
});
// Test if the generate() method has the correct output in every instance of circle
test('generate() method', () => {
    const circle = new Circle('circle', 'green', 'yellow', 'circle text');
    const writeToSVG = circle.generate();
    // generate() is definining all components of svgParams, but I need to re-define them here in order for the test to be able to compare them to those defined by generate() due to scope.
    let svgTopTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n`
    let shapeAndFill = `\t<${circle.shape} cx="150" cy="100" r="80" fill="${circle.fill}" />`
    let textAndTextColor = `\n\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text>`
    let svgBottomTag = `\n\n</svg>`
    let svgParams = `${svgTopTag}${shapeAndFill}${textAndTextColor}${svgBottomTag}`;
    // This is comparing the output of circle.generate() to svgParams defined above.
    expect(writeToSVG).toBe(svgParams);
});