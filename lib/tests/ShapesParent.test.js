const ShapesParent = require('../classes/ShapesParent');
// Test if a new instance of parent is created
test('Instantiate', () => {
    const parent = new ShapesParent();
    expect(parent).toBeInstanceOf(ShapesParent);
});
// Test if shape is correctly assigned to every instance of ShapesParent
test('Initialize shape', () => {
    const shape = 'rectangle'
    const parent = new ShapesParent(shape);
    expect(parent.shape).toBe(shape);
});
// Test if fill is correctly assigned to every instance of ShapesParent
test('Initialize fill', () => {
    const fill = 'red'
    const parent = new ShapesParent('rectangle', fill);
    expect(parent.fill).toBe(fill);
});
// Test if textColor is correctly assigned to every instance of ShapesParent
test('Initialize textColor', () => {
    const textColor = 'blue'
    const parent = new ShapesParent('rectangle', 'red', textColor);
    expect(parent.textColor).toBe(textColor);
});
// Test if text is correctly assigned to every instance of ShapesParent
test('Initialize text', () => {
    const text = 'Insert text here'
    const parent = new ShapesParent('rectangle', 'red', 'blue', text);
    expect(parent.text).toBe(text);
});
// Test if the setColor() method correctly changes the fill
test('setColor() method', () => {
    const newFill = 'green'
    const parent = new ShapesParent('rectangle', 'red', 'blue', 'Insert text here');
    parent.setColor(newFill);
    expect(parent.fill).toBe('green');
});