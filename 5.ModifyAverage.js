function modify(num) {
    function sumDigits(numAsStr) {
        let sum = 0;
        for (let digit of numAsStr) {
            sum += Number(digit);
        }
        return sum;
    }

    let numAsString = num.toString();
    let sum = sumDigits(numAsString);
    while (sum / numAsString.length <= 5) {
        numAsString += "9";
        sum = sumDigits(numAsString);
    }
    console.log(numAsString);
}

modify(101);