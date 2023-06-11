// Data needed for validation
const svgColors = require('../seed data/svgColors');

function validateText(inputText) {
    if (inputText.length <= 3 && inputText.length >= 1) {
        return true;
    } else {
        return 'Please enter up to three characters.';
    } 
}

function validateTextColor(inputTextColor) {
const colorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (svgColors.includes(inputTextColor.toLowerCase()) || colorPattern.test(inputTextColor) === true) {
        return true;
    } else {
        return 'Please enter a valid color. You may enter a valid color key word (EX: "bisque") or a hexadecimal number (EX: "#000000" or "#000").';
    } 
}

function validateFillColor(inputFillColor) {
const colorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (svgColors.includes(inputFillColor.toLowerCase()) || colorPattern.test(inputFillColor) === true) {
        return true;
    } else {
        return 'Please enter a valid color. You may enter a valid color key word (EX: "bisque") or a hexadecimal number (EX: "#000000" or "#000").';
    } 
}

module.exports = {
    validateText,
    validateTextColor,
    validateFillColor
};