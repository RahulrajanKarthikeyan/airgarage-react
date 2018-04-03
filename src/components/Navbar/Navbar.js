import React, {Component} from 'react'
import './Navbar.css';
import { Menu, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {

    return (
      <Menu className="Navbar" stackable={true}>
        <Menu.Item as={Link} to='/' >
          <img src='/minilogo.png' alt="AirGarage logo icon" />
        </Menu.Item>
          <Menu.Item className="LogoText" as={Link} to='/' header>AirGarage</Menu.Item>

        <Menu.Item>
          <Input className='SearchBar' icon='search' placeholder='Park near...' />
        </Menu.Item>
        
        <Menu.Menu position='right'>
          <Menu.Item className="Tab" name='List a spot' as={Link} to='/list' />
          <Menu.Item className="Tab" name='Find a spot' as={Link} to='/spots' />
          <Menu.Item className="Tab" name='Sign up' as={Link} to='/signup' />
          <Menu.Item className="Tab" name='Log in' as={Link} to='/login' />
        </Menu.Menu>

      </Menu>
    )
  }
}

  export default Navbar;