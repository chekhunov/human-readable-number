module.exports = function toReadable(number) {
    const them = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "ty",
        "y",
        "hundred",
    ];

    const them1 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const decimal = [
        "hundred",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let str = "";
    const newNum = String(number).split("");
    let numLen = newNum.length;

    if (numLen < 2) {
        // *
        return (str = them[number]);
    }

    if (numLen === 2) {
        if (Number(newNum[0]) < 2) {
            return (str = them1[Number(newNum[1])]);
        }
        // *0
        if (Number(newNum[1]) === 0) {
            return (str = decimal[Number(newNum[0])]);
        }
        // **
        return (str = `${decimal[Number(newNum[0])]} ${
            them[Number(newNum[1])]
        }`);
    }

    if (numLen === 3) {
        // *00
        if (Number(newNum[1]) === 0 && Number(newNum[2]) === 0) {
            return (str = `${them[Number(newNum[0])]} ${decimal[0]}`);
        }
        // **0
        if (Number(newNum[2]) === 0) {
            return (str = `${them[Number(newNum[0])]} ${decimal[0]} ${
                decimal[Number(newNum[1])]
            }`);
        }
        if (Number(newNum[1]) === 0) {
            return (str = `${them[Number(newNum[0])]} ${decimal[0]} ${
                them[Number(newNum[2])]
            }`);
        }
        if (Number(newNum[1]) === 1) {
            return (str = `${them[Number(newNum[0])]} ${decimal[0]} ${
                them1[Number(newNum[2])]
            }`);
        }
        return (str = `${them[Number(newNum[0])]} ${decimal[0]} ${
            decimal[Number(newNum[1])]
        } ${them[Number(newNum[2])]}`);
    }

    return str;
};