const CustomError = require("../utils/customError");

console.log("CustomError module loaded:", CustomError);

function validateRequest(req, res, next) {
  console.log("Request body:", req.body);
  if (!req.body.message && !req.body.prompt) {
    throw new CustomError(400, "Request body must contain a message or prompt");
  }
  next();
}

module.exports = validateRequest;
