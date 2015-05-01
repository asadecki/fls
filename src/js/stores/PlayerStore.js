const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

let _data = [];

let counter = 0;

let PlayerStore = assign({}, BaseStore, {

    getAll() {
        return {
            players: _data
        };
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        let action = payload.action;

        switch (action.type) {

            case Constants.ActionTypes.GET_SEASON_STATISTICS:
                let players = action.players;
                let sortField = action.sortField;
                _data = sortPlayers(players, sortField);
                PlayerStore.emitChange();
                break;

            case Constants.ActionTypes.GET_FOREVER_STATISTICS:

                // probably it could be done better
                let players = action.players;
                let seasonNumber = action.seasonNumber;

                if (counter === 0) {
                    _data = [];
                }

                players.forEach(function(player) {

                    var alreadyExists = false;
                    _data.forEach(function(data) {
                        if(data.name == player.name) {
                            data.value += player.value;
                            alreadyExists = true;
                        }
                    });

                    if (!alreadyExists) {
                        _data.push(player);
                    }
                });

                counter++;
                if (counter === seasonNumber) {
                    counter = 0;
                    sortPlayers(_data);
                    PlayerStore.emitChange();
                }

                break;
        }
    })
});

function sortPlayers(array) {
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

module.exports = PlayerStore;
