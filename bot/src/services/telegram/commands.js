const bot = require('./bot');
const userService = require('resources/user/user.service');
const chatService = require('resources/chat/chat.service');

bot.start(async (ctx, next) => {
  const { message } = ctx.update;
  await userService.createUser(message.from);
  await chatService.createChat(message.chat);
});


