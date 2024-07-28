async function errorHandler(err, req, res, next) {
  const chalk = (await import("chalk")).default;

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  console.error(chalk.red(`Error: ${message}`));
  res.status(statusCode).json({ error: message });
}

module.exports = errorHandler;
