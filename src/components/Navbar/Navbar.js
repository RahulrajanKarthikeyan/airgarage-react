import React, {Component} from 'react'
import './Navbar.css';
import { Responsive, Button, Menu, Input, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'


class Navbar extends Component {

  constructor(props) {
    super(props);  
    this.state = { address: '' }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

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
          <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
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
            <Dropdown.Item as={Link} to='/list'>List a spot</Dropdown.Item>
            <Dropdown.Item as={Link} to='/spots'>Find a spot</Dropdown.Item>
            <Dropdown.Item as={Link} to='/signup' >Sign up</Dropdown.Item>
            <Dropdown.Item as={Link} to='/login' >Log in</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Responsive>

      </Menu>
    )
  }
}

  export default Navbar;
