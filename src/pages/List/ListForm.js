import React, { Component } from 'react';
import { Responsive, Button, Menu, Input, Dropdown, Radio, Form, Transition } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css';
import RangeSlider from './RangeSlider';

class ListForm extends Component {


    state = { animation: 'fade down', duration: 500, visible: true }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {

        const { animation, duration, visible } = this.state

        const spotOptions = [
          { key: 'pd', text: 'Paved Driveway', value: 'paved driveway' },
          { key: 'gd', text: 'Gravel/Dirt Driveway', value: 'gravel driveway' },
          { key: 'ga', text: 'Garage', value: 'garage' },
          { key: 'pl', text: 'Parking Lot', value: 'parking lot' },
          { key: 'cl', text: 'Covered Parking Lot', value: 'covered parking lot' }
        ]

        const columnStyle = {
          paddingLeft: '8.333%',
          paddingRight: '8.333%',
          display: 'inline-block',
          marginTop: '12px',
          marginBottom: '12px'
        };

        const columnHeadingStyle = {
          paddingTop: '12px',
          paddingBottom: '12px'
        };

        return (
        <div style={columnStyle} className="ui text container">
        
        <h2 style={columnHeadingStyle} className="ui header">Hi, Alexander! Let's get you set up to start renting out your extra parking spaces.</h2>
        <Form size={'large'}>
        
        <Form.Input fluid label='What would you like to call your spot?' placeholder="Scott's Driveway" />
        <Form.Input fluid label='Where is your spot located?' placeholder="422 E. Central Ave" />
        <Form.Input fluid placeholder="Apt #405 (optional)" />

        <Form.Select label="What type of spot are you listing?" options={spotOptions} placeholder='--' />

        <Form.Input fluid label='How many parking spaces do you have?'/>
        <h4 className="ui header">Is your spot available 24/7?</h4>

        <Radio toggle onChange={this.handleVisibility} />
        <p />
         <Transition.Group animation={animation} duration={duration}>
            {visible && <Form.TextArea fluid label='When is your spot available?' placeholder="ex. MWF only; 9-5 PM only"/>}
        </Transition.Group>
        <p />

        <Form.TextArea fluid label='Additional notes' placeholder="(optional) ex. mid-size and smaller cars only"/>

        <h4 className="ui header">Price per month</h4>
        <RangeSlider />

        <h4 className="ui header">Are you listing this spot on behalf of an organization?</h4>
        <Radio toggle />

        <h4 className="ui header">Allow automatic bookings from verified customers?</h4>
        <Radio toggle />
        
        </Form>
        </div>
        )
    }
}

export default ListForm