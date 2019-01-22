module.exports.getStatsMessage = function (count, maxCount, price) {
  const countMessage = maxCount ? `${count}/${maxCount}` : `${count}`;
  const priceMessage = price ? `\n${(price / count).toFixed(2)} BYN с человека` : '';
  return countMessage + priceMessage;
};
