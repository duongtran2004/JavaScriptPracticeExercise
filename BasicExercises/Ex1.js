const date = new Date(); //default value: current date
//problem 1 : Get day of the week

let dayNumber = date.getDay();
let currentDayOfWeek;

//return 0 to 6, Monday to Sunday
let dayList = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
switch (dayNumber) {
  case 1:
    currentDayOfWeek = dayList[0];
    break;
  case 2:
    currentDayOfWeek = dayList[1];
    break;
  case 3:
    currentDayOfWeek = dayList[2];
    break;
  case 4:
    currentDayOfWeek = dayList[3];
    break;
  case 5:
    currentDayOfWeek = dayList[4];
    break;
  case 6:
    currentDayOfWeek = dayList[5];
    break;
  case 7:
    currentDayOfWeek = dayList[6];
    break;
}
console.log("🚀 ~ currentDayOfWeek:", currentDayOfWeek);

//problem 2 : Get time in a specific format

let period;
let hour = date.getHours();
if (hour > 12) {
  period = "PM";
  //convert from 24h hour format to 12 hour format
  hour = hour - 12;
} else {
  period = "AM";
}

let minute = date.getMinutes();

let second = date.getSeconds();

console.log(
  "Current time: " + hour + " " + period + " : " + minute + " : " + second
);
