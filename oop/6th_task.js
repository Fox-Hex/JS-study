function Money(value, currency = "usd") {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function () {
  return this.value;
};

Money.prototype.getCurrency = function () {
  return this.currency;
};

Money.prototype.exchangeTo = function (currency) {
  const usdToEur = 0.7;
  const eurToUsd = 1.2;
  let value = this.getValue();

  if (currency !== this.getCurrency()) {
    if (currency === "eur") {
      value = value * usdToEur;
    }
    if (currency === "usd") {
      value = value * eurToUsd;
    }
  }

  return new Money(value, currency);
};

Money.prototype.add = function (money) {
  const currency = this.getCurrency()
  const value = this.getValue()

  const convertedAddedValue = money.exchangeTo(currency).getValue()
  const resultValue = value + convertedAddedValue

  return new Money(resultValue, currency)
}

Money.prototype.format = function () {
  const currency = this.getCurrency()
  const value = this.getValue()
  return value.toLocaleString(undefined, {style: 'currency', currency})
}

const money1 = new Money(100);
// Возвращает значение
console.log(money1.getValue());
console.log(money1.getCurrency());

// Конвертирует в указанную валюту и возвращает новое значение
console.log(money1.exchangeTo("eur").getValue());

const money2 = new Money(200, "eur");
console.log(money2.getValue());

const money3 = money2.add(money1);
console.log(money3.getValue())
const money4 = money3.add(money1);
console.log(money4.getValue())

console.log(money1.format()) // "$100.00"
console.log(money2.format()) // "€200.00"

// const money5 = new Money(10000);
// money5.format(); // "$10,000.00"
