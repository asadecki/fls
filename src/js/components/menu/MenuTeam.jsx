const React = require('react');
const ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
const Button = require('react-bootstrap/lib/Button');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');
const Carousel = require('react-bootstrap/lib/Carousel');
const CarouselItem = require('react-bootstrap/lib/CarouselItem');
const DropdownButton = require('react-bootstrap/lib/DropdownButton');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const PlayerAction = require('../../actions/PlayerAction');

let MenuIndividual = React.createClass({

	handleClick() {
		PlayerAction.getPlayers("seasonSpring2015", "goals");
	},

	render() {
		// TODO each DropdownButton should be a separate ReactObject

		return (
			<Navbar brand='Individual statistics' inverse>
             	<Nav bsStyle='tabs' >
					<NavItem onClick={this.handleClick} eventKey={1} href='#'>Formations</NavItem>
              	</Nav>
            </Navbar>
		)
  	}

});

module.exports = MenuIndividual;
