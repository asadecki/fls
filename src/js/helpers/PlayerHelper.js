var Constants = require('../constants/AppConstants');
var SeasonsConstant = require('../constants/SeasonsInfo');
var TeamConstant = require('../constants/TeamInfo');

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

  mapToPlayer: function (array, statisticField) {
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
