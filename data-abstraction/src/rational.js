const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

const makeRational = (numer, denom) => ({
    numer: numer / getGcd(numer, denom),
    denom: denom / getGcd(numer, denom),
  })

const getNumer = (rational) => (rational.numer)
const getDenom = (rational) => (rational.denom)

const add = (rational1, rational2) => {
    const totalDenom = getDenom(rational1) * getDenom(rational2)
    const newNumer1 = getNumer(rational1) * getDenom(rational2)
    const newNumer2 = getNumer(rational2) * getDenom(rational1)

    return makeRational(newNumer1 + newNumer2, totalDenom)    
}

const sub = (rational1, rational2) => {
    const totalDenom = getDenom(rational1) * getDenom(rational2)
    const newNumer1 = getNumer(rational1) * getDenom(rational2)
    const newNumer2 = getNumer(rational2) * getDenom(rational1)

    return makeRational(newNumer1 - newNumer2, totalDenom)   
}

const rat1 = makeRational(3, 9);
console.log(ratToString(rat1));
console.log(getNumer(rat1)); // 1
console.log(getDenom(rat1)); // 3

const rat2 = makeRational(10, 3);
const rat3 = add(rat1, rat2);
console.log(ratToString(rat3)); // '11/3'
const rat4 = sub(rat1, rat2);
console.log(ratToString(rat4)); // '-3/1'
