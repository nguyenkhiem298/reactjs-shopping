import React, { Component } from 'react'
import Footer from '../nav/Footer';
import Nav from '../nav/Nav';
import Slide from '../nav/Slide';
import './style.css'

export default class DefaultLayout extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    render() {

        console.log(this.props.children);
        return (
            <div>
                <Nav/>
                <main id="mainn">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
