const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const PlayerHelper = require('../helpers/PlayerHelper');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

let _data = {
  players: []
};

let token = "default";

function getStatisticsForOneSeason(action) {
  let statisticName = action.statisticName;
  let seasonName = action.seasonName;
  let players = action.players;

  _data.players = PlayerHelper.sortByField(PlayerHelper.mapToPlayer(players, statisticName));
  PlayerStore.setStatisticInfo(statisticName, seasonName);
  PlayerStore.emitChange();
}

function getStatisticsForAllSeasons(action) {
  let statisticName = action.statisticName;
  let players = action.players;
  let currentToken = action.token;

  if (token !== currentToken) {
    _data.players = [];
    token = currentToken;
  }

  players = PlayerHelper.mapToPlayer(players, statisticName);

  players.forEach(function (player) {
    var alreadyExists = false;
    _data.players.forEach(function (data) {
      if (data.name === player.name) {
        data.value += player.value;
        alreadyExists = true;
      }
    });

    if (!alreadyExists) {
      _data.players.push(player);
    }
  });

  _data.players = PlayerHelper.sortByField(_data.players);
  PlayerStore.setStatisticInfo(action.statisticName);
  PlayerStore.emitChange();
}

let PlayerStore = assign({}, BaseStore, {

  getData() {
    return {
      players: _data.players,
      statisticTitle: _data.statisticTitle,
    };
  },

  setStatisticInfo(statisticName, seasonName) {
    _data.statisticTitle = "Most " + statisticName + " of " + (seasonName ? seasonName : "ages");
  }
});

BaseStore.addHandler(Constants.ActionTypes.GET_SEASON_PLAYERS_STATISTICS, getStatisticsForOneSeason);
BaseStore.addHandler(Constants.ActionTypes.GET_FOREVER_PLAYERS_STATISTICS, getStatisticsForAllSeasons);

module.exports = PlayerStore;
