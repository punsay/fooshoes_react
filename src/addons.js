import React, { Component } from 'react';
import { productsList } from './Constants/navitems';

class Addons extends Component {

    render() {

        const list = productsList.map((item) => {

            console.log("items", item);
            return (
                <div key={item.id}>
                    <div className="itemImage">
                        <img className="productImg" src={item.image} />
                    </div>
                    <div className="itemDetail" >{item.name}</div>
                    <div className="itemDetail" >Price:&thinsp;&#8377;&thinsp;{item.price}</div>
                </div>
            );
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Addons;