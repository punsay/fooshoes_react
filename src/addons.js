import React, { Component } from 'react';
import Axios from 'axios';


class Addons extends Component {

    constructor() {
        super();
        this.state = {
            productsList: [],
        };
    }

    componentDidMount() {
        this.getApiData();
    }

    getApiData = () => {
        Axios.get('https://api.myjson.com/bins/uy2z6')
            .then((response) => {
                this.setState({ productsList: response.data }, () => {
                    console.log(" >>>> ", this.state.productsList);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {


        const list = this.state.productsList.map((item) => {

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