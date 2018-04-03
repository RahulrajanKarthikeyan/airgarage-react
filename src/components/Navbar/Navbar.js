import React, {Component} from 'react'
import './Navbar.css';
import { Responsive, Button, Menu, Input, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {

    return (
      <Menu className="Navbar">

          <Menu.Item as={Link} to='/' >
            <img src='/minilogo.png' alt="AirGarage logo icon" />
          </Menu.Item>
          <Responsive as={Menu.Item} minWidth={400}>
            <Link className="LogoText" to="/">AirGarage</Link>
          </Responsive>
          
        <Menu.Item>
          <Input className='SearchBar' icon='search' placeholder='Park near...' />
        </Menu.Item>

        <Responsive as={Menu.Menu} position="right" minWidth={Responsive.onlyTablet.minWidth}>
          <Menu.Item className="Tab" name='List a spot' as={Link} to='/list' />
          <Menu.Item className="Tab" name='Find a spot' as={Link} to='/spots' />
          <Menu.Item className="Tab" name='Sign up' as={Link} to='/signup' />
          <Menu.Item className="Tab" name='Log in' as={Link} to='/login' />
        </Responsive>

        <Responsive as={Menu.Item} maxWidth={Responsive.onlyTablet.minWidth}>
          <Dropdown text="☰">
          <Dropdown.Menu style={{ left: 'auto', right: 0 }}>
            <Dropdown.Item direction='right'>List a spot</Dropdown.Item>
            <Dropdown.Item>Find a spot</Dropdown.Item>
            <Dropdown.Item>Sign up</Dropdown.Item>
            <Dropdown.Item>Log in</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Responsive>

      </Menu>
    )
  }
}

  export default Navbar;