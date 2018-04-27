import React, {Component} from 'react'
import './Navbar.css';
import { Responsive, Button, Menu, Input, Dropdown, Portal, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/Login/login.js'

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
         

         <Portal trigger={<Menu.Item className="Tab" name='Log in' />}>
            <Segment style={{ width: '40%', height: '95%', position: 'fixed', zIndex: 1, left: '35%', top: '3%'}}>
              <LoginForm/>
            </Segment>
         </Portal>

        </Responsive>

        <Responsive as={Menu.Item} maxWidth={Responsive.onlyTablet.minWidth}>
          <Dropdown text="☰">
          <Dropdown.Menu style={{ left: 'auto', right: 0 }}>
            <Dropdown.Item as={Link} to='/list'>List a spot</Dropdown.Item>
            <Dropdown.Item as={Link} to='/spots'>Find a spot</Dropdown.Item>
            <Dropdown.Item as={Link} to='/signup' >Sign up</Dropdown.Item>
           

            <Portal trigger= {<Dropdown.Item >Login</Dropdown.Item>}>
                <Segment style={{ width: '40%', height: '95%', position: 'fixed', zIndex: 1, left: '35%', top: '3%'}}>
                  <LoginForm/>
                </Segment>
            </Portal>
            
          </Dropdown.Menu>
        </Dropdown>
        </Responsive>

      </Menu>
    )
  }
}

  export default Navbar;