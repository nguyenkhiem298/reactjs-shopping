import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
    render() {
        // style={{bottom: '0 !important', position: "fixed"}}
        return (
            <footer>
                <div className="card mt-5 foot" id="footer">
                    <div className="card-header">
                    Quote
                    </div>
                    <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                    </div>
                </div>
            </footer>
        )
    }
}
