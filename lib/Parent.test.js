const Parent = require('./Parent');

test('Instantiate', () => {
    const parent = new Parent();
    expect(parent).toBeInstanceOf(Parent);
});