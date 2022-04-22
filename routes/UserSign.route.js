
const validationauth = require("../Validation/auth.validation")
const auth = require("../Controller/auth.controller")
module.exports = function(app){
app.post("/ecomm/api/v1/auth/signup",[validationauth.create,validationauth.role],auth.signup)
app.post("/ecomm/api/v1/auth/signin",[validationauth.login],auth.signin)
}