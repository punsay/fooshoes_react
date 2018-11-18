import React, { Component } from 'react';
import { Header } from './header';
import Footer from './footer';
import Navigation from './navigation';
import Widget from './widget';
import Addons from './addons';


class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Addons />
                {/* <Navigation /> */}
                <Widget />
                <Footer />
            </div>
        );
    }
}

export default App;
