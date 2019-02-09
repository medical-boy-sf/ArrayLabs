function sumEvenNumbers(arrNums) {
    let sum = 0;
    for (let i = 0; i < arrNums.length; i++) {
        if(arrNums[i] % 2 === 0) {
            sum += Number(arrNums[i]);
        }
    }

    console.log(sum);
}