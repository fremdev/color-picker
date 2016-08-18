function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = function(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getRandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

const getRandomColor = function() {
  const maxNum = 255;
  const r = getRandomNum(maxNum),
        g = getRandomNum(maxNum),
        b = getRandomNum(maxNum);
  const color = rgbToHex(r, g, b);
  return color;
}

export const hexToRgb = function(hex) {
    const bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return 'rgb(' + [r, g, b].join(' ,') + ')';
}

export default getRandomColor;
