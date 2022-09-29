function NameValidation(req, res, next) {
  if (!req.body.name) {
    res.status(400).send("Name has to be provided");
  }
  next();
}
function IdValidation(req, res, next) {
  if (!req.params.id) {
    res.status(400).send("ID has to be provided");
  }
  next();
}
const validation = { NameValidation, IdValidation };

module.exports = validation;
