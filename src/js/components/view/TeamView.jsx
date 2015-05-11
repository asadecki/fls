const React = require('react');
const MenuTeam = require('./../menu/MenuTeam.jsx');
const PlayerGrid = require('./../PlayerGrid.jsx');


let IndividualView = React.createClass({

  render() {
    return (
      <div>
        <MenuTeam/>
        <PlayerGrid/>
      </div>
    );
  }
});

module.exports = IndividualView;
