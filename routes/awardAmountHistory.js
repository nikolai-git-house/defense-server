var { awardAmountHistory} = require('../models/index')
var { dispatchSuc, dispatchErr} = require('../tools/tools')

let getAwardAmount = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  let fiscalYear = req.query.fiscalYear;
  console.log(dunsNumber);
  awardAmountHistory.findOne(({
    where: {
      dunsnumber: dunsNumber,
      fiscal_year: fiscalYear
    }
  })).then((result) => {
    dispatchSuc(res, result);
  }).catch((err) => {
    dispatchErr(res, [err.message]);
  });
}

let getAllAwardAmount = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  awardAmountHistory.findAll(({
    where: {
      dunsnumber: dunsNumber
    }
  })).then((result) => {
    let finalResult = {
      years : [],
      awardAmounts: {},
      maxAmount: 0
    };
    Object.keys(result).forEach(function(key) {

      const awardHist = result[key];
      finalResult.years.push(awardHist.fiscal_year);
      finalResult.awardAmounts[awardHist.fiscal_year] = awardHist.award_amount;
      if(finalResult.maxAmount < awardHist.award_amount)
        finalResult.maxAmount = awardHist.award_amount;
    });
    console.log(finalResult);
    dispatchSuc(res, finalResult);
}).catch((err) => {
    dispatchErr(res, [err.message]);
});
}
module.exports = {getAwardAmount, getAllAwardAmount}
