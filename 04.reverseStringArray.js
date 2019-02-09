function reverseStringArray(strArr) {
    let arrRev = [];

    for (let i = 0; i < strArr.length; i++) {
        arrRev[i] = strArr[strArr.length - i - 1];
    }

    let message = '';

    for (let i = 0; i < arrRev.length; i++) {
        message += arrRev[i] + ' '
    }
    
    console.log(message);
}