import React, { Component } from 'react';
import navitems from './Constants/navitems';

class Navigation extends Component {
    render() {

        console.log(navitems);

        const navitems_list = navitems.map((item) => {
            return (
                <div>
                    {item}
                </div>
            )
        });

        return (
            <div>
                {navitems_list}
            </div>
        )
    }
};
export default Navigation;


