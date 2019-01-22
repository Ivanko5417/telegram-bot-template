const model = require('./chat.schema');

const findByChatId = function(chatId) {
  return model.findOne({ chatId }).exec();
};

module.exports.findByChatId = findByChatId;

module.exports.createChat = async function(chat) {
  const storedChat = await findByChatId(chat.chatId);
  if (storedChat) {
    return storedChat;
  }

  return model.create({
    chatId: chat.id,
    type: chat.type,
    photo: {
      smallFileId: chat.photo && chat.photo.small_file_id,
      bigFileId: chat.photo && chat.photo.big_file_id,
    },
    title: chat.title,
    allMembersAreAdministrators: chat.all_members_are_administrators,
    description: chat.description,
    inviteLink: chat.invite_link,
    stickerSetName: chat.sticker_set_name,
    canSetStickerSet: chat.can_set_sticker_set,
  });
};

module.exports.removeAll = function () {
  return model.deleteMany({});
};
