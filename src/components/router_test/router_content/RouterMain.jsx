import React, { Component } from 'react'
import Footer from '../nav/Footer'
import Nav from '../nav/Nav'
import Slide from '../nav/Slide'

export default class RouterMain extends Component {
    render() {
        return (
            <>
                <Nav/>
                <Slide/>

                <Footer/>
            </>
        )
    }
}
