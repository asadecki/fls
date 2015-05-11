const React = require('react');
const MenuTeam = require('./../menu/MenuTeam.jsx');
const FormationGrid = require('./../FormationGrid.jsx');


let IndividualView = React.createClass({

  render() {
    return (
      <div>
        <MenuTeam/>
        <FormationGrid/>
      </div>
    );
  }
});

module.exports = IndividualView;
