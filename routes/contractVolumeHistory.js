var { contractVolumeHistory} = require('../models/index')
var { dispatchSuc, dispatchErr} = require('../tools/tools')

let getContractVolume = (req, res, next) => {
  let dunsNumber = req.query.dunsNumber;
  let fiscalYear = req.query.fiscalYear;
  console.log(dunsNumber);
  contractVolumeHistory.findOne(({
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

let getAllContractVolume = (req, res, next) => {
    let dunsNumber = req.query.dunsNumber;
    contractVolumeHistory.findAll(({
        where: {
            dunsnumber: dunsNumber
        }
    })).then((result) => {
        let finalResult = {
            years : [],
            contractVolumes: {},
            maxVolume: 0
        };
    Object.keys(result).forEach(function(key) {

        const contractHist = result[key];
        finalResult.years.push(contractHist.fiscal_year);
        finalResult.contractVolumes[contractHist.fiscal_year] = contractHist.num_of_awards;
        if(finalResult.maxVolume < contractHist.num_of_awards)
            finalResult.maxVolume = contractHist.num_of_awards;
    });
    console.log(finalResult);
    dispatchSuc(res, finalResult);
}).catch((err) => {
        dispatchErr(res, [err.message]);
});
}
module.exports = {getContractVolume, getAllContractVolume}
