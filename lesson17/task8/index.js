export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  interval: 0,
  startTimer() {
     this.interval = setInterval(() =>  {
        if(this.secondsPassed === 60) {
          this.secondsPassed = 0;
          this.minsPassed++;
        }
        this.secondsPassed++;
        } , 1000)
  },
  getTime() {
    if(this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    } else return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.interval);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  }
}
timer.startTimer();
timer.getTime();
