const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

let _data = [];

let PlayerStore = assign({}, BaseStore, {

    getAll() {
        return {
            players: _data
        };
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        let action = payload.action;

        switch(action.type) {
            case Constants.ActionTypes.GET_STATISTICS:
                let players = action.players;
                _data = players;
                PlayerStore.emitChange();
                break;

        }
    })
});

module.exports = PlayerStore;
