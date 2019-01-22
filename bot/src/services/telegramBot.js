const config = require('config');
const Telegraf = require('telegraf');

const bot = new Telegraf(config.telegram.token);
bot.startPolling();

// Put here your message templates

module.exports = bot;
