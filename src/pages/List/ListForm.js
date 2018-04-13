import React, { Component } from 'react';
import { Responsive, Button, Menu, Input, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import RangeSlider from './RangeSlider';

class ListForm extends Component {
    render() {
        return (
        <div className="ui text container">
        <h2 className="ui header">Hi, Alexander! Let's get you set up to start renting out your extra parking spaces.</h2>
        <h4 className="ui header">Price per month</h4>
        <RangeSlider />
        </div>
        )
    }
}

export default ListForm