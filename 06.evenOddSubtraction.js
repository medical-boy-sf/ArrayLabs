function evenOddSubtraction(arrNums) {
    let sumEvens = 0;
    let sumOdds = 0;

    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i] % 2 === 0) {
            sumEvens += Number(arrNums[i]);
        } else {
            sumOdds += Number(arrNums[i]);
        }
    }

    let result = sumEvens - sumOdds;

    console.log(result);
}