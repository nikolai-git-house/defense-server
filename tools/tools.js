
let packRes = (status, content = [], validation = []) =>
({
  status: status,
  content: content,
  validation: validation
});

let dispatchSuc = (res, payload) => res.send(packRes(true, payload))

let dispatchErr = (res, err) => res.send(packRes(false, undefined, err))

module.exports = {dispatchSuc, dispatchErr}
