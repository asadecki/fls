const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

let _data = {};

let counter = 0;

let PlayerStore = assign({}, BaseStore, {

    getData() {
        return {
            players : _data.players,
            statisticTitle : _data.statisticTitle
        };
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        let action = payload.action;

        if (action.type === Constants.ActionTypes.GET_SEASON_STATISTICS) {

            _data.players = sort(action.players);
            setStatisticTitle(action.statisticName, action.seasonName);
            PlayerStore.emitChange();

        } else if (action.type === Constants.ActionTypes.GET_FOREVER_STATISTICS){
            // probably it could be done better
            if (counter === 0) {
                _data.players = [];
            }

            action.players.forEach(function(player) {

                var alreadyExists = false;
                _data.players.forEach(function(data) {
                    if(data.name == player.name) {
                        data.value += player.value;
                        alreadyExists = true;
                    }
                });

                if (!alreadyExists) {
                    _data.players.push(player);
                }
            });

            counter++;
            if (counter === action.seasonToCollectNumber) {
                counter = 0;
                sort(_data.players);
                setStatisticTitle(action.statisticName);
                PlayerStore.emitChange();
            }
        }
    })
});

function sort(array) {
    return array.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    });
};

function setStatisticTitle(statisticName, seasonName) {
    _data.statisticTitle = "Most " + statisticName + " of " + (seasonName ? seasonName : "ages");
};

module.exports = PlayerStore;
