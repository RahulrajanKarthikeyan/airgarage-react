import { Navbar, Footer } from '../index.js'
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <h1>AirGarage homepage design</h1>
            <Footer />
            </div>
        )
    }
}

export default Home;