import React, {Component} from 'react'
import './Navbar.css';
import { Responsive, Menu, Input, Dropdown, Portal, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import SignUpForm from '../../components/Signup/signup.js'

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
          <Portal trigger={<Menu.Item className="Tab" name='Sign up' />} onClick={this.toggleVisibility}>
          <Segment style={{ width: '40%', height: '95%', position: 'fixed', zIndex: 1, left: '35%', top: '3%' }}>
              <SignUpForm/>
          </Segment>
          </Portal>
          <Menu.Item className="Tab" name='Log in' as={Link} to='/login' />
        </Responsive>

        <Responsive as={Menu.Item} maxWidth={Responsive.onlyTablet.minWidth}>
          <Dropdown text="☰">
          <Dropdown.Menu style={{ left: 'auto', right: 0 }}>
            <Dropdown.Item as={Link} to='/list'>List a spot</Dropdown.Item>
            <Dropdown.Item as={Link} to='/spots'>Find a spot</Dropdown.Item>

            <Portal trigger= {<Dropdown.Item >Sign up</Dropdown.Item>} >
            <Segment style={{ width: '40%', height: '95%', position: 'fixed', zIndex: 1, left: '35%', top: '3%' }}>
                <SignUpForm/>
            </Segment>
            </Portal>

            <Dropdown.Item as={Link} to='/login' >Log in</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Responsive>

      </Menu>
    )
  }
}

  export default Navbar;
