const React = require('react');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const MenuChoiceAction = require('../../actions/MenuChoiceAction');
const FormationStatsticsAction = require('../../actions/FormationStatsticsAction');

let StatisticTypeMenu = React.createClass({

  handleClick() {
    var type = event.target.parentElement.parentElement.getAttribute('data-menu-type');
    MenuChoiceAction.setMenuType(type);

    if (type === 'team') {
      FormationStatsticsAction.getFormations();
    }
  },

  render() {
    // TODO each NavItem should be a separate ReactObject

    return (
      <Grid>
        <Row className='show-grid'>
          <Col onClick={this.handleClick} data-menu-type='individual' xs={12} md={6}>
            <div>
              <p>Individual Statistics</p>
              <img src="https://goo.gl/TBVSBK"/>
            </div>
          </Col>
          <Col onClick={this.handleClick} data-menu-type='team' xs={12} md={6}>
            <div>
              <p>Team Statistics</p>
              <img src="https://goo.gl/6JGEp1"/>
            </div>
          </Col>
        </Row>

      </Grid>
    )
  }
});

module.exports = StatisticTypeMenu;
