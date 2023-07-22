import dayjs from 'dayjs';

const allMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function checkIfArray(arr) {
    const result = Array.isArray(arr);
    if(!result) throw new Error ("Data is not Array");
    return true;
}

function getTimeStamp(time) {
    return Number(time) * 1000;
}

function getMonthName(unixtime) {
    const monthNum = dayjs(unixtime).month();
    return allMonthNames[monthNum];
}

function sortByMonth(arr) {
    const sortedMonths = arr.sort((a, b) => {
        return (allMonthNames.indexOf(a) < allMonthNames.indexOf(b) ? 1 : -1);
    });
    return sortedMonths;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { checkIfArray, getTimeStamp, allMonthNames, getMonthName, sortByMonth, numberWithCommas };