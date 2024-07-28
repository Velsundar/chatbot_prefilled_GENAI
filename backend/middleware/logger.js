
async function logger(req, res, next) {
    const chalk = (await import('chalk')).default;
    console.log(chalk.blue(`Requested: ${req.method} ${req.url}`));
  
    const originalSend = res.send;
  
    res.send = function (body) {
        console.log(chalk.green(`Response: ${body}`));
      originalSend.call(this, body);
    };
  
    next();
  }
  
  module.exports = logger;
  