"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format = (num) => {
    const [whole, fraction] = String(num).split('.');
    const chunked = [];
    whole
        .split('')
        .reverse()
        .forEach((char, index) => {
        if (index % 3 === 0) {
            chunked.unshift([char]);
        }
        else {
            chunked[0].unshift(char);
        }
    });
    return (chunked.map((chunk) => chunk.join('')).join(' ') +
        (fraction ? `.${fraction}` : ''));
};
exports.default = format;
