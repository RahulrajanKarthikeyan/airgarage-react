import React, { Component } from 'react';
import { Responsive, Button, Menu, Input, Dropdown, Radio, Form, Transition, Icon, Popup } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css';
import RangeSlider from './RangeSlider';

class ListForm extends Component {


    state = {   animation: 'fade down', 
                duration: 500, 
                availabilityVisible: true,
                companyVisible: false }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleAvailability = () => this.setState({ availabilityVisible: !this.state.availabilityVisible })
    handleCompany = () => this.setState({ companyVisible: !this.state.companyVisible })

    render() {

        const { animation, duration, availabilityVisible, companyVisible } = this.state

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

        const submitButtonStyle = {
            backgroundColor: '#fa824c'
        };

        return (
        <div style={columnStyle} className="ui text container">
        
        <h2 style={columnHeadingStyle} className="ui header">Hi, Alexander! Let's get you set up to start renting out your extra parking spaces.</h2>
        <Form size={'large'}>

        <Form.Field>
            <Popup
                trigger={<label>What would you like to call your spot?</label>}
                content='Your spot name visible to people looking to park. Something short and friendly. Is it a driveway? A garage? Is it outside a house or apartment?'
                position='right center'
                size='tiny'
            />
            <Input fluid  placeholder="Scott's Driveway"/>
        </Form.Field>

        <Form.Field>
            <Popup
                trigger={<label>Where is your spot located?</label>}
                content='We only share an approximate location publicly.'
                position='right center'
                size='tiny'
            />
            <Input fluid placeholder="422 E. Central Ave"/>
        </Form.Field>

        <Form.Input fluid placeholder="Apt #405 (optional)" />

        <Form.Select label="What type of spot are you listing?" options={spotOptions} placeholder='--' />

        <Form.Field>
            <Popup
                trigger={<label>How many parking spaces do you have?</label>}
                content='How many cars can park here? Each car will pay separately.'
                position='right center'
                size='tiny'
            />
            <Input fluid />
        </Form.Field>

        <Popup
            trigger={<h4 className="ui header">Is your spot available 24/7?</h4>}
            content='If your spot is only available certain hours, select no.'
            position='right center'
            size='tiny'
        />

        <Radio toggle onChange={this.handleAvailability} />
        <p />
         <Transition.Group animation={animation} duration={duration}>
            {availabilityVisible && <Form.TextArea fluid label='When is your spot available?' placeholder="ex. MWF only; 9-5 PM only"/>}
        </Transition.Group>
        <p />

        <Form.Field>
            <Popup
                trigger={<label>Additional notes</label>}
                content='Is your spot only for smaller cars? Anything else to add?'
                position='right center'
                size='tiny'
            />
            <Form.TextArea fluid placeholder="(optional) ex. mid-size and smaller cars only" />
        </Form.Field>

        <h4 className="ui header">Price per month</h4>
        <RangeSlider />

        <Popup
            trigger={<h4 className="ui header">Are you listing this spot on behalf of an organization?</h4>}
            content='If you are listing on behalf of a business, select yes.'
            position='right center'
            size='tiny'
        />
        
        <Radio toggle onChange={this.handleCompany} />
        <Transition.Group animation={animation} duration={duration}>
            {companyVisible && <Form.Input fluid label='Company name' placeholder="AirGarage, Inc."/>}
        </Transition.Group>

        <Popup
            trigger={<h4 className="ui header">Allow automatic bookings from verified customers?</h4>}
            content='If selected, we will allow verified customers to book instantly. If not selected, you will have to manually approve each renter.'
            position='right center'
            size='tiny'
        />

        <Radio toggle />

        <p />
        <Button animated type='submit' size='big' color='orange' style={submitButtonStyle}>
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
        <p />
        
        </Form>
        </div>
        )
    }
}

export default ListForm