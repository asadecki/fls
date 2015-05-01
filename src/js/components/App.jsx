const React = require('react');
const PlayerStore = require('../stores/PlayerStore');
const PlayerAction = require('../actions/PlayerAction');
const TopPlayerList = require('./TopPlayerList.jsx');
const Menu = require('./Menu.jsx');
const Button = require('react-bootstrap/lib/Button');


let App = React.createClass({

  	getInitialState() {
    	return {
      		players: []
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
		return (

      		<div className="container">
        		<Menu/>
        		<TopPlayerList players ={players}/>
      		</div>
    	);
  	}
});

module.exports = App;
