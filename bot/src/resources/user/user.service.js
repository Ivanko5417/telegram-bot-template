const model = require('./user.schema');

const findByUserId = function(userId) {
  return model.findOne({ userId }).exec();
};

module.exports.findByUserId = findByUserId;

module.exports.createUser = async function(user) {
  const storedUser = await findByUserId(user.id);

  if (storedUser) {
    return storedUser;
  }

  return model.create({
    userId: user.id,
    username: user.username,
    firstName: user.first_name,
    lastName: user.last_name,
    isBot: user.is_bot,
  });
};

module.exports.removeAll = function () {
  return model.deleteMany({});
};
