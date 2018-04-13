import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import './rangeslider.css';

class RangeSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      horizontal: 10
    }
  }

  handleChangeHorizontal = value => {
    this.setState({
      horizontal: value
    })
  };

  render () {
    const { horizontal } = this.state
    const horizontalLabels = {
      0: 'Low',
      50: 'Medium',
      100: 'High'
    }

    const formatDollars = value => '$' + value

    return (
      <div className='slider custom-labels'>
        <Slider
          min={10}
          max={75}
          value={horizontal}
          format={formatDollars}
          handleLabel={horizontal}
          onChange={this.handleChangeHorizontal}
        />
      </div>
    )
  }
}

export default RangeSlider