let fs = require("fs");

let file = fs.readFileSync("inputDates.txt", {encoding: "utf8"});
file = file.replace(/\r/g, "");

let dates = [];

let days = file.split("\n");
let lastDay = null;
let currMonth = 1;
for(let day of days){
    day = parseInt(day);
    if(lastDay != null && day < lastDay){
        currMonth++;
    }

    dates.push("2021-" + ("00"+currMonth).substr(-2) + "-" + ("00"+day).substr(-2));
    lastDay = day;
}

console.log(JSON.stringify(dates));