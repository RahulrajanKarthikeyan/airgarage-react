import React, { Component } from 'react';
import { Responsive, Button, Menu, Input, Dropdown, Radio } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css';
import RangeSlider from './RangeSlider';

class ListForm extends Component {


    render() {

        return (
        <div className="ui text container">
        <h2 className="ui header">Hi, Alexander! Let's get you set up to start renting out your extra parking spaces.</h2>
        <h4 className="ui header">Price per month</h4>
        <RangeSlider />
        <h4 className="ui header">Is your spot available 24/7?</h4>
        <Radio toggle />
        </div>
        )
    }
}

export default ListForm