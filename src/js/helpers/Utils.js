var Constants = require('../constants/AppConstants');

module.exports = {

  sortByField: function (array) {
    return array.sort(function (a, b) {
      if (a.value > b.value) {
        return -1;
      }
      if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
  },

  mapToPlayers: function (array, statisticField) {
    return array.map(function (playerFullInfo) {

      var player = {
        name: playerFullInfo.name,
        number: playerFullInfo.number,
        value: playerFullInfo[statisticField],
        statisticName: statisticField
      };

      if (statisticField === 'goals-and-assists') {
        player.value = playerFullInfo.goals + playerFullInfo.assists;
        player.statisticName = 'goals and assists';
      }

      return player;
    });
  }
};
