const make = function(numer, denum) {
  return {
    Numer: numer,
    Denom: denum,
    setNumer(newNumer) {
      this.Numer = newNumer;
    },
    setDenom(newDenom) {
      this.Denom = newDenom;
    },
    getNumer() {
      return this.Numer;
    },
    getDenom() {
      return this.Denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`
    },
    add(addedRational) {
      const a = this.Numer;
      const b = this.Denom;
      const c = addedRational.Numer;
      const d = addedRational.Denom;
      
      const newNumer = a * d + b * c;
      const newDenom = b * d

      return make(newNumer, newDenom);
    },
  }
};

const rat1 = make();
console.table(rat1);

rat1.setNumer(3);
rat1.setDenom(8);
console.table(rat1);

console.log(rat1.getNumer())
console.log(rat1.getDenom())

const rat2 = make(10, 3);
console.table(rat2);
// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
console.log(rat3.toString())