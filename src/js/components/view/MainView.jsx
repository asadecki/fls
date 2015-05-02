const React = require('react');
const MenuStore = require('./../../stores/MenuStore');
const StatisticTypeMenu = require('./../menu/StatisticTypeMenu.jsx');
const IndividualView = require('./../view/IndividualView.jsx');

let MainView = React.createClass({

  	getInitialState() {
    	return {
      		menuType : ''
    	}
  	},

  	_onChange() {
    	this.setState(MenuStore.getData());
  	},

  	componentDidMount() {
    	MenuStore.addChangeListener(this._onChange);
  	},

  	render() {

    	let {menuType} = this.state;
    	console.log({menuType})

		return (
      		<div className="container">
      			<StatisticTypeMenu/>
      			{menuType === 'individual' ? <IndividualView/> : ""}
      		</div>
    	);
  	}
});

module.exports = MainView;