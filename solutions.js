"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// Problem 1
function isTrue(input) {
    return input === true;
}

// Problem 2
function isFalse(input1) {
    return input1 === false;
}

// Problem 3
function not(input2) {
    return !input2;
}

// Problem 4
function addOne(input3) {
        return Number(input3) + 1;
    }

// Problem 5
function isEven(input4) {
    if (typeof input4 === 'boolean') {
        return false;
    }
    if ((typeof input4 === 'number'
            && input4 % 2 === 0)
        || (!isNaN(input4) &&
            input4 % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}
//     function isEven(input4) {
//         if (typeof input4 === 'number'
//             || typeof input4 === 'string'
//             && !isNaN(input4)) {
//             return input4 % 2 === 0;
//         }
//         return false;
//     }
//     if(
//         typeof input4 === 'number'
//         || typeof input4 === 'string'
//         && !isNan(input4)
//     )
// }


// Problem 6
function isIdentical(num1, num2) {
    if (num1 !== num2) {
        return false;
    } else {
        return true;
    }
}

// Problem 7
function isEqual(num3, num4) {
    if (num3 != num4) {
        return false;
    } else {
        return true;
    }
}

// Problem 8
function or(lan1, lan2) {
    let green = lan1 || lan2;
    return green;
}

// Problem 9
function and(nam1, nam2) {
    let turt = nam1 && nam2;
    return turt;
}

// Problem 10
function concat(part1, part2) {
    if (typeof part1 === 'string' && typeof part2 === 'string') {
        return part1 + part2;}
    if (typeof part1 === 'number' && typeof part2 === 'number') {
        return String(part1) + String(part2);}
    if (typeof part1 === 'boolean' && typeof part2 === 'boolean'){
        return String(part1) + String(part2);}
}