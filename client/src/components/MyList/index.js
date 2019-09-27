import React, { Component } from "react";
import "./style.css";

class ProfileList extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // when clicked, call tradeRequest from the props with this product
    handleSubmit(event) {
        event.preventDefault();
        this.props.getRequestInfo([event.target.name], event.target.value)
    }

    render() {
        let button;
        // go through products received from props
        let list = this.props.products.map(product => {
            // if status is process, button will be given
            if (product.status == "process") {
                button = <button
                    className="btn requested"
                    name="requested"
                    value={[product.requestFrom, product._id]}
                    onClick={this.handleSubmit}
                    type="submit">Trade Requested</button>
            } else if (product.status == "traded") {
                button = <button
                className="btn new"
                type="submit">NEW ITEM! (traded)</button>

            } else {
                // else no button
                button = <div></div>
            }

            // only display my products
            if (product.user == this.props.user) {
                return (<div className="col-md-4 products" key={product._id}>
                    <img src={product.image} style={{ width: "300px" }} />
                    <p> <strong id="product">PRODUCT NAME: </strong>{product.productname} </p>
                    <p> <strong id="product">CONDITION: </strong>{product.condition} </p>
                    <p> <strong id="product"> DESCRIPTION: </strong>{product.description} </p>
                    {button}
                </div>
                );
            }
        });

        return (
            <div className = "row">
                {list}
            </div>
        )
    }
}
export default ProfileList