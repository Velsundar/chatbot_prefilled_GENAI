const CustomError = require("../utils/customError");

console.log("CustomError module loaded:", CustomError);

function validateRequest(req, res, next) {
  console.log("Request body:", req.body);
  if (!req.body.message) {
    throw new CustomError(400, "Request body must contain a message.");
  }
  next();
}

module.exports = validateRequest;
