var restify = require('restify')
var restifyValidator = require('restify-validator')

var routes = require('./routes/index')
var server = restify.createServer()

var port = process.env.PORT || 3000;
server.use(restify.bodyParser())
server.use(restify.queryParser())
server.use(restifyValidator)
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.get('/awardAmountHistory', routes.awardAmountHistory.getAwardAmount);
server.get('/allAwardAmountHistory', routes.awardAmountHistory.getAllAwardAmount);
server.get('/contractVolumeHistory', routes.contractVolumeHistory.getContractVolume);
server.get('/allContractVolumeHistory', routes.contractVolumeHistory.getAllContractVolume);
server.get('/awardAmountByPsc', routes.awardAmountByPsc.getAwardAmountByPsc);
server.get('/topAwardAmountByPsc', routes.awardAmountByPsc.getTopAwardAmountByPsc);

server.get('/awardAmountByNaics', routes.awardAmountByNaics.getAwardAmountByNaics);
server.get('/topAwardAmountByNaics', routes.awardAmountByNaics.getTopAwardAmountByNaics);
server.get('/awardAmountByDodAgency', routes.awardAmountByDodAgency.getAwardAmountByDodAgency);
server.listen(port, function () {
  console.log('REST API Server listening at http://localhost:' + port);
})

// for testing
module.exports = server
