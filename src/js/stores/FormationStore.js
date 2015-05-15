const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const Utils = require('../helpers/Utils');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

let _data = {};

function getStatisticsForOneSeason(action) {
  let seasonName = action.seasonName;
  let players = action.players;

  console.log("FormationStore");
  console.log(players);

  var goals = {
    defence: 0,
    center: 0,
    wings: 0
  };

  players.forEach(function (player) {
    var formation = Utils.getFormation(player.name);
    goals[formation] += player.goals;
  });

  _data = goals;
  console.log(goals);

  FormationStore.emitChange();
}

let FormationStore = assign({}, BaseStore, {

  getData() {
    return {
      goals: _data
    };
  }
});

BaseStore.addHandler(Constants.ActionTypes.GET_SEASON_FORMATION_STATISTICS, getStatisticsForOneSeason);

module.exports = FormationStore;
