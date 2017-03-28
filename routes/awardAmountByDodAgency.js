var { awardAmountByDodAgency} = require('../models/index')
var { dispatchSuc, dispatchErr} = require('../tools/tools')

let getAwardAmountByDodAgency = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  awardAmountByDodAgency.findAll(({
    where: {
      dunsnumber: dunsNumber
    },
    order: [['pct_award_amount', 'DESC']]
  })).then((result) => {
    console.log(JSON.stringify(result));
    dispatchSuc(res, result);
  }).catch((err) => {
    dispatchErr(res, [err.message]);
  });
}

module.exports = {getAwardAmountByDodAgency}
