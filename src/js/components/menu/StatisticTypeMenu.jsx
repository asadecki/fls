const React = require('react');
const Nav = require('react-bootstrap/lib/Nav');
const Navbar = require('react-bootstrap/lib/Navbar');
const NavItem = require('react-bootstrap/lib/NavItem');
const MenuAction = require('../../actions/MenuAction');


let StatisticTypeMenu = React.createClass({

	handleClick() {

		var type = event.target.parentElement.getAttribute('data-menu-type');
		MenuAction.setMenuType(type);
	},

	render() {
		// TODO each NavItem should be a separate ReactObject

		return (
			<Navbar brand='Schibsted Tech Polska' inverse>
             	<Nav bsStyle='buttons' >
					<NavItem onSelect={this.handleClick} data-menu-type='individual'>
						Individual Statistics
					</NavItem>

					<NavItem onSelect={this.handleClick} data-menu-type='team'>
						Team Statistics
					</NavItem>
              	</Nav>
            </Navbar>
		)
  	}
});

module.exports = StatisticTypeMenu;
