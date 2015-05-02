const React = require('react');
const ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
const Button = require('react-bootstrap/lib/Button');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');
const DropdownButton = require('react-bootstrap/lib/DropdownButton');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const PlayerAction = require('../../actions/PlayerAction');

let MenuIndividual = React.createClass({

	handleClick() {
		var season = event.target.parentElement.getAttribute('data-season');
		var statName = event.target.parentElement.getAttribute('data-statistic-name');
		PlayerAction.getPlayers(season,statName);
	},

	render() {
		// TODO each DropdownButton should be a separate ReactObject

		return (
			<Navbar brand='Individual statistics' inverse>
             	<Nav bsStyle='tabs' >

					<DropdownButton title='Goals'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='goals'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='goals'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='goals'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Assists'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='assists'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='assists'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='assists'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Goals and assists'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='goals-and-assists'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='goals-and-assists'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='goals-and-assists'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Appearances'>
                    	<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='appearances'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='appearances'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='appearances'>Forever</MenuItem>
                    </DropdownButton>

                    <DropdownButton title='MVP'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='mvp'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='mvp'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='mvp'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Yellow Cards'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='yellow'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='yellow'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='yellow'>Forever</MenuItem>
					</DropdownButton>

					<DropdownButton title='Red Cards'>
						<MenuItem eventKey='1' onSelect={this.handleClick} data-season='seasonSpring2015' data-statistic-name='red'>Spring 2015</MenuItem>
						<MenuItem eventKey='2' onSelect={this.handleClick} data-season='seasonFall2014' data-statistic-name='red'>Fall 2014</MenuItem>
						<MenuItem eventKey='3' onSelect={this.handleClick} data-season='forever' data-statistic-name='red'>Forever</MenuItem>
					</DropdownButton>


              	</Nav>
            </Navbar>
		)
  	}
});

module.exports = MenuIndividual;
