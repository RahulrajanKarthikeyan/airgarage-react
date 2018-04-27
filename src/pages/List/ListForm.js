import React, { Component } from 'react';
import { Responsive, Button, Menu, Input, Dropdown, Radio, Form, Transition, Icon, Popup } from 'semantic-ui-react'
import axios from 'axios';
import './Override.css';
import RangeSlider from './RangeSlider';

class ListForm extends Component {

    state = {   
        animation: 'fade down', 
        duration: 500, 
        availabilityVisible: true,
        companyVisible: false,

        name: '',
        classification: '',
        addressLine1: '',
        addressLine2: '',
        price: '',
        available_24_7: false,
        auto_book: false,
        notes: '',
        restrictions: '',
        quantity: '',
        photo_url: '',
        company: false
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleAvailability = () => this.setState({ availabilityVisible: !this.state.availabilityVisible, available_24_7: this.state.availabilityVisible })
    
    handleCompany = () => this.setState({ companyVisible: !this.state.companyVisible, company: !this.state.companyVisible })

    handleSubmit = () => {
        console.log(this.state);
        //event.preventDefault();

        const addressText = this.state.addressLine1 + " " + this.state.addressLine2

        const spot = {
            name: this.state.name,
            classification: this.state.classification,
            address_text: addressText,
            price: this.state.price,
            available_24_7: this.state.available_24_7,
            auto_book: this.state.auto_book,
            notes: this.state.notes,
            restrictions: this.state.restrictions,
            quantity: this.state.quantity,
            photo_url: this.state.photo_url,
            company: this.state.company
        };

        axios.post('http://staging.airgara.ge/api/spots/', spot)
          .then(res => {
            alert("Spot posted!");
          })

          .catch(error => {
            var errorResponse = "Unable to Post!\n\n";

            for(var key in error.response.data) {
                errorResponse += key;
                errorResponse += ': ';
                errorResponse += error.response.data[key];
                errorResponse += '\n';
            }
                alert(errorResponse);
                console.log(error.response.data);
          });
    }

    render() {

        const { 
            animation, 
            duration, 
            availabilityVisible, 
            companyVisible, 
            name,
            classification,
            addressLine1,
            addressLine2,
            price,
            available_24_7,
            auto_book,
            notes,
            restrictions,
            quantity,
            photo_url,
            company 
        } = this.state;

        const spotOptions = [
          { key: 'pd', text: 'Paved Driveway', value: 'Paved Driveway' },
          { key: 'gd', text: 'Gravel/Dirt Driveway', value: 'Gravel/Dirt Driveway' },
          { key: 'ga', text: 'Garage', value: 'Garage' },
          { key: 'pl', text: 'Parking Lot', value: 'Parking Lot' },
          { key: 'cl', text: 'Covered Parking Lot', value: 'Covered Parking Lot' }
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
        <Form size={'large'} onSubmit={this.handleSubmit}>

        <Form.Field>
            <Popup
                trigger={<label>What would you like to call your spot?</label>}
                content='Your spot name visible to people looking to park. Something short and friendly. Is it a driveway? A garage? Is it outside a house or apartment?'
                position='right center'
                size='tiny'
            />
            <Input fluid  placeholder="Scott's Driveway" name='name' value={name} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
            <Popup
                trigger={<label>Where is your spot located?</label>}
                content='We only share an approximate location publicly.'
                position='right center'
                size='tiny'
            />
            <Input fluid placeholder="422 E. Central Ave" name='addressLine1' value={addressLine1} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Input fluid placeholder="Apt #405 (optional)" name='addressLine2' value={addressLine2} onChange={this.handleChange} />

        <Form.Select label="What type of spot are you listing?" options={spotOptions} placeholder='--' name='classification' value={classification} onChange={this.handleChange} />

        <Form.Field>
            <Popup
                trigger={<label>How many parking spaces do you have?</label>}
                content='How many cars can park here? Each car will pay separately.'
                position='right center'
                size='tiny'
            />
            <Input fluid name='quantity' value={quantity} onChange={this.handleChange} />
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
            {availabilityVisible && <Form.TextArea fluid label='When is your spot available?' placeholder="ex. MWF only; 9-5 PM only" name='restrictions' value={restrictions} onChange={this.handleChange}/>}
        </Transition.Group>
        <p />

        <Form.Field>
            <Popup
                trigger={<label>Additional notes</label>}
                content='Is your spot only for smaller cars? Anything else to add?'
                position='right center'
                size='tiny'
            />
            <Form.TextArea fluid placeholder="(optional) ex. mid-size and smaller cars only" name='notes' value={notes} onChange={this.handleChange}/>
        </Form.Field>

        <h4 className="ui header">Price per month</h4>
        <RangeSlider name='price' value={price} onChange={this.handleChange}/>

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