const userName = window.localStorage.getItem("currentUser");
document.getElementById("name").innerHTML =  "Hello" + " " + userName;



const REGULAR_HOURS = 9;

function diff_hours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

}


const shifts = Array.from(new Array(8)).map(_ => {
    const date = new Date();
    const dayInMoth = Math.ceil(Math.random() * 27)
    const startDate = new Date(date.getFullYear(), date.getMonth(), dayInMoth, 10);
    const endDate = new Date(date.getFullYear(), date.getMonth(), dayInMoth, 20);

    return {
        totalHours: diff_hours(endDate, startDate),
        regularHours: Math.min(REGULAR_HOURS, diff_hours(endDate, startDate)),
        extraHours: Math.max(0, diff_hours(endDate, startDate) - REGULAR_HOURS),
        startDate: startDate,
        endDate: endDate
    }
});
console.log(shifts);

document.getElementById('totalHours').innerHTML = 'Total ' + shifts.reduce(function (acc, curr) {
    return acc + curr.totalHours;
}, 0)