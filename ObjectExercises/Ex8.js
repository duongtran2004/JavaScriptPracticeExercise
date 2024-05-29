class MyClock {
  constructor() {
    this.updateTime(); // every time a clock object is created, it calls the updateTime function
  }

  // Update time to the current moment
  updateTime() {
    this.currentDate = new Date();
    this.hours = this.currentDate.getHours();
    this.minutes = this.currentDate.getMinutes();
    this.seconds = this.currentDate.getSeconds();
  }

  // Get the time in String format (human readable)
  getTime() {
    // Define all necessary variables for properties (hours, minutes, seconds, period)
    let hours = this.hours;
    let minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    let seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    let period = hours < 12 ? "AM" : "PM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let resultString = hours + ":" + minutes + ":" + seconds + " " + period;
    return resultString;
  }

  run() {
    setInterval(this.update.bind(this), 1000); //set interval (delay) for 1000 miliseconds = 1 second
  }

  update() {
    this.updateTime();
    console.log(this.getTime()); //get the current time and print to console
  }
}

// Create a new clock object
let clock = new MyClock();
clock.run();
