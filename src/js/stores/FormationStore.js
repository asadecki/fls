const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const Utils = require('../helpers/Utils');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

let _data = {
  defence: {},
  centralMidfielder: {},
  wingers: {}
};

function getStatisticsForOneSeason(action) {
  let seasonName = action.seasonName;
  let players = action.players;
  console.log('xxx');
  console.log(action);
  console.log('xxx');

  FormationStore.setStatisticInfo(statisticName, seasonName);
  FormationStore.emitChange();
}

let FormationStore = assign({}, BaseStore, {

  getData() {
    return {
      x: [1, 2, 3]
    };
  },

  setStatisticInfo(statisticName, seasonName) {
    //_data.statisticTitle = "Most " + statisticName + " of " + (seasonName ? seasonName : "ages");
    _data.statisticTitle = "set me pls";
  }
});

BaseStore.addHandler(Constants.ActionTypes.GET_SEASON_FORMATION_STATISTICS, getStatisticsForOneSeason);

module.exports = FormationStore;
