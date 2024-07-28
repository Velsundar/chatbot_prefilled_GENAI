async function errorHandler(err, req, res, next) {
    const chalk = (await import('chalk')).default;
  
    console.error(chalk.red(`Error: ${err.message}`));
    res.status(500).json({ error: err.message || 'Internal server error.' });
  }
  
  module.exports = errorHandler;
  