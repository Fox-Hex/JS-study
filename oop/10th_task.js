class Time {

  static fromString(time) {
    const [hours, minutes] = time.split(':')
    return new Time(hours, minutes)
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}





const time = new Time(10, 15);
console.log(`The time is ${time}`); // => 'The time is 10:15'

const time2 = Time.fromString('5:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time2}`); // 'The time is 10:23'