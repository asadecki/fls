const $ = require('jquery');
const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const Utils = require('../helpers/Utils');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');
const FormationGoals = require('../templates/FormationGoals');

let _data = {};

function getStatisticsForOneSeason(action) {
  let seasonName = action.seasonName;
  let players = action.players;

  console.log("FormationStore");
  console.log(players);

  var stats = {
    goals: {
      defence: 0,
      center: 0,
      wings: 0
    },
    assists: {
      defence: 0,
      center: 0,
      wings: 0
    },
    both: {
      defence: 0,
      center: 0,
      wings: 0
    }
  };

  players.forEach(function (player) {
    var formation = Utils.getFormation(player.name);
    stats.goals[formation] += player.goals;
    stats.assists[formation] += player.assists;
    stats.both[formation] += player.assists + player.goals;
  });

  var dataGoals = $.extend(true, {}, FormationGoals.Data);
  var dataAssists = $.extend(true, {}, FormationGoals.Data);
  var both = $.extend(true, {}, FormationGoals.Data);

  dataGoals[0].value = stats.goals.defence;
  dataGoals[1].value = stats.goals.center;
  dataGoals[2].value = stats.goals.wings;

  dataAssists[0].value = stats.assists.defence;
  dataAssists[1].value = stats.assists.center;
  dataAssists[2].value = stats.assists.wings;

  both[0].value = stats.both.defence;
  both[1].value = stats.both.center;
  both[2].value = stats.both.wings;


  _data.goals = dataGoals;
  _data.assists = dataAssists;
  _data.both = both;

  FormationStore.emitChange();
}

let FormationStore = assign({}, BaseStore, {

  getData() {
    console.log("FormationStore#getData");
    console.log(_data);
    return _data;
  }
});

BaseStore.addHandler(Constants.ActionTypes.GET_SEASON_FORMATION_STATISTICS, getStatisticsForOneSeason);

module.exports = FormationStore;
