const React = require('react');
const PlayerStore = require('../stores/PlayerStore');
const PlayerAction = require('../actions/PlayerAction');
const TopPlayerList = require('./TopPlayerList.jsx');
const Menu = require('./Menu.jsx');
const Button = require('react-bootstrap/lib/Button');
const Panel = require('react-bootstrap/lib/Panel');


let App = React.createClass({

  	getInitialState() {
    	return {
      		players: [],
      		statisticTitle: "Statistics of Schibsted Tech Polska"
    	}
  	},

  	_onChange() {
    	this.setState(PlayerStore.getAll());
  	},

  	componentDidMount() {
    	PlayerStore.addChangeListener(this._onChange);
  	},

  	render() {
    	let {players} = this.state;
    	let {statisticTitle} = this.state;
		return (

      		<div className="container">
        		<Menu/>
        		<Panel className="js-stats-title">{statisticTitle}</Panel>
        		<TopPlayerList players ={players}/>
      		</div>
    	);
  	}
});

module.exports = App;
