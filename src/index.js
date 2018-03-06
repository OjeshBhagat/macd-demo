const data = require('../data/aapl.js');
console.log(1)
import * as technicalindicators from 'technicalindicators';
console.log(2)
const MACD = technicalindicators.MACD;

const run = () => {
  const closeList = data.map((p) => {
    return parseFloat(p.close);
  })

  const macdInput = {
    values: closeList,
    fastPeriod: 5,
    slowPeriod: 10,
    signalPeriod: 7,
    SimpleMAOscillator: false,
    SimpleMASignal: false
  }
  const result = MACD.calculate(macdInput);
  result.map((i) => {
    console.log(i);
  })
}

run();