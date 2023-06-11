const { validateText, validateTextColor, validateFillColor } = require('../validation/inquirerValidation');
// Test if the validateText() function correctly validates user input text to be between 1 and 3 chars long.
test('validateText() function', () => {
    const inputText = 'svg'
    const validate = validateText(inputText);
    expect(validate).toBe(true);
});
// Test if the validateTextColor() function correctly validates that the user input a valid color.
test('validateTextColor() function', () => {
    // Users enter a color key word
    const validateColorKey = validateTextColor('bisque');
    // Users enter a color key word in all caps
    const validateAllCaps = validateTextColor('BLUE');
    // Users enter a hex number th is 3 chars long
    const validateHexThree = validateTextColor('#AAA');
    // Users enter a hex number th is 6 chars long
    const validateHexSix = validateTextColor('#000000');
    // expectations for each
    expect(validateColorKey).toBe(true);
    expect(validateAllCaps).toBe(true);
    expect(validateHexThree).toBe(true);
    expect(validateHexSix).toBe(true);
});
// Test if the validateFillColor() function correctly validates that the user input a valid color.
test('validateFillColor() function', () => {
    // Users enter a color key word
    const validateColorKey = validateFillColor('bisque');
    // Users enter a color key word in all caps
    const validateAllCaps = validateFillColor('BLUE');
    // Users enter a hex number th is 3 chars long
    const validateHexThree = validateFillColor('#AAA');
    // Users enter a hex number th is 6 chars long
    const validateHexSix = validateFillColor('#000000');
    // expectations for each
    expect(validateColorKey).toBe(true);
    expect(validateAllCaps).toBe(true);
    expect(validateHexThree).toBe(true);
    expect(validateHexSix).toBe(true);
});
