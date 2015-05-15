var Constants = require('../constants/AppConstants');
var Formations = require('../constants/Formations');


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
  },

  getFormation: function (playerName) {
    if (Formations.Defence.indexOf(playerName) !== -1) {
      return "defence";
    } else if (Formations.Center.indexOf(playerName) !== -1) {
      return "center";
    } else if (Formations.Wings.indexOf(playerName) !== -1) {
      return "wings";
    }
  }
};
