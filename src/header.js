import React, { Component } from 'react';
import './style.css';

export class Header extends Component {
    render() {
        return (
            <header className="heading">
                <div className="inner-container">
                    <h1>FOOSESHOES</h1>
                    <div>
                        <span className="search-icon">
                            <img src="assets/Search Icon.png" />
                        </span>
                        <button className="user-login">Login or Register</button>
                    </div>
                </div>
            </header>
        );
    }
}

