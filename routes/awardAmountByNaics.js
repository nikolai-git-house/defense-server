var { awardAmountByNaics} = require('../models/index')
var { dispatchSuc, dispatchErr} = require('../tools/tools')

let getAwardAmountByNaics = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  let naics = req.query.naics;
  console.log(dunsNumber);
  awardAmountByNaics.findOne(({
    where: {
      dunsnumber: dunsNumber,
      naics_code: naics
    }
  })).then((result) => {
    dispatchSuc(res, result);
  }).catch((err) => {
    dispatchErr(res, [err.message]);
  });
}

let getTopAwardAmountByNaics = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  console.log(dunsNumber);
  awardAmountByNaics.findAll({
    where: {
      dunsnumber: dunsNumber,
    },
    limit: 5,
    order: [['award_amount', 'DESC']]
  }).then((result) => {
    console.log(JSON.stringify(result));
    dispatchSuc(res, result);
}).catch((err) => {
    dispatchErr(res, [err.message]);
});
}

module.exports = {getAwardAmountByNaics, getTopAwardAmountByNaics}
