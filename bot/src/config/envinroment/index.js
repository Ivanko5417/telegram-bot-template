const development = require('./development');
const production = require('./production');
const env = process.env.NODE_ENV || 'development';

let base = {
  env,
  isDev: env === 'development',
  isProd: env === 'production',
};

if (base.isDev) {
  base = {
    ...base,
    ...development,
  };
}

if (base.isProd) {
  base = {
    ...base,
    ...production,
  };
}

module.exports = base;
