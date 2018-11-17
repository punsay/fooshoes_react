import React from 'react';
import './styling/widget.css';

const widget=()=>{
    return(
        <div className="widget-container">
            <ul className="widget">
                <li className="text-widget">
                    <h4>TEXT WIDGET</h4>
                    <p>Donec sed odio dui. Nulla vitae elit libero,
                    a pharetra augue.
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                    eget lacinia odio sem nec elit.</p>
                </li>
                <li>
                    <h4></h4>
                    <p></p>
                </li>
                <li>
                    <h4></h4>
                    <p></p>
                </li>
            </ul>
        </div>
    )
};
export default widget;