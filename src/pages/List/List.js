import React, { Component } from 'react';
import { Navbar, Footer } from '../index.js'
import ListForm from './ListForm'

class List extends Component {
    render() {
        return (
        <div>
        <Navbar />
        <ListForm />
        <Footer />
        </div>
        )
    }
}

export default List