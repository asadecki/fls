const keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        ADD_TASK: null,
        GET_SEASON_PLAYERS_STATISTICS: null,
        GET_FOREVER_PLAYERS_STATISTICS: null,
        CHOOSE_MENU_TYPE: null
    }),

    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};
