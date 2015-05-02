const React = require('react');
const ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
const Button = require('react-bootstrap/lib/Button');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');
const DropdownButton = require('react-bootstrap/lib/DropdownButton');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const PlayerAction = require('../actions/PlayerAction');



let Menu = React.createClass({

	handleClick() {
		var season = event.target.parentElement.getAttribute('data-season');
		var statName = event.target.parentElement.getAttribute('data-statistic-name');
		PlayerAction.getPlayers(season,statName);
	},

	render() {
		return (
			<Navbar brand='Schibsted Tech Polska' inverse>
             	<Nav bsStyle='tabs' >

					<DropdownButton title='Best Strikers'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='goals'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='goals'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='goals'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Who can pass like Iniesta'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='assists'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='assists'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='assists'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Who can do both'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='goals-and-assists'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='goals-and-assists'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='goals-and-assists'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Appearances'>
                    	<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='appearances'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='appearances'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='appearances'>Forever</MenuItem>
                    </DropdownButton>


              	</Nav>
            </Navbar>
		)
  	}
});

module.exports = Menu;
