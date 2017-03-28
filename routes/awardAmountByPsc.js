var { awardAmountByPsc} = require('../models/index')
var { dispatchSuc, dispatchErr} = require('../tools/tools')

let getAwardAmountByPsc = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  let psc = req.query.psc;
  console.log(dunsNumber);
  awardAmountByPsc.findOne(({
    where: {
      dunsnumber: dunsNumber,
      psc_code: {
        $like: `${psc}%`
      }
    }
  })).then((result) => {
    dispatchSuc(res, result);
  }).catch((err) => {
    dispatchErr(res, [err.message]);
  });
}

let getTopAwardAmountByPsc = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  console.log(dunsNumber);
  awardAmountByPsc.findAll({
    where: {
      dunsnumber: dunsNumber,
    },
    limit: 5,
    order: [['award_amount', 'DESC']]
  }).then((result) => {
    console.log(JSON.stringify(result))
    dispatchSuc(res, result);
}).catch((err) => {
    dispatchErr(res, [err.message]);
});
}
module.exports = {getAwardAmountByPsc, getTopAwardAmountByPsc}
