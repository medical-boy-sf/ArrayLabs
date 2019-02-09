function reverseArrayOfNumbers(number, arrNums) {
    number = Number(number);
    let revArr = [];
    let message = '';

    arrNums = arrNums.splice(0, number);

    for (let i = 0; i < arrNums.length; i++) {
        revArr[i] = arrNums[arrNums.length - 1 - i];
    }

    for (let i = 0; i < number; i++) {
        message += revArr[i] + ' ';
    }

    console.log(message);
}