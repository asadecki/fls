const React = require('react');
const MenuIndividual = require('./../menu/MenuIndividual.jsx');
const PlayerGrid = require('./../PlayerGrid.jsx');


let IndividualView = React.createClass({

  	render() {
		return (
			<div>
      			<MenuIndividual/>
      			<PlayerGrid/>
			</div>
    	);
  	}
});

module.exports = IndividualView;
