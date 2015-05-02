const React = require('react');
const MainView = require('./view/MainView.jsx');

let App = React.createClass({

  	render() {
			return (
				<div>
					<MainView/>
				</div>
    		);
  	}
});

module.exports = App;