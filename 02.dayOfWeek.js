function dayOfWeek(number) {
    number = Number(number);
    let monthsArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (number > 7 || number < 1) {
        console.log("Invalid day!");
    } else {
        console.log(monthsArr[number - 1]);
    }
}