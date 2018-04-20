import React, { Component } from 'react';
import { Navbar, Footer } from '../index.js'
import SignUpForm from '../../components/Signup/signup.js'

class Signup extends Component {
    render() {
        return (
        <div>
        <Navbar />
        <SignUpForm></SignUpForm>
        <Footer />
        </div>
        )
    }
}

export default Signup
