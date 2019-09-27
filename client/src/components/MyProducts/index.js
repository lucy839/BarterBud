import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

class MyProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectTo: null,
            trade: ""
        }
        this.back = this.back.bind(this)
        this.trade = this.trade.bind(this)
    }

    // when function is called, call closeRequest function to close the modal and redirect to market page
    back() {
        this.props.closeRequest();
        this.setState({ redirectTo: '/market' })
    }

    // when this button is clicked, update status of both the user's and the product's user status to process 
    //  in the database
    trade(event) {
        let test = [this.props.request, event.target.value]
        API.requestTrade(test)
            .then(
                alert("Request Sent!"),
                this.back()
            )
            .catch(err => console.log(err))
    }

    render() {
        // format my products from props
        let back = <button className="btn back" type="submit" onClick={this.back}><i className="fas fa-arrow-alt-circle-left"></i></button>;
        let list = this.props.myProducts.map(product => {
            if (!(product.status == "traded")) {
                return (<div className="col-md-4 products" key={product._id}>
                    <img src={product.image} style={{ width: "300px" }} />
                    <p> <strong id="product">product name: </strong>{product.productname} </p>
                    <p> <strong id="product">condition: </strong>{product.condition} </p>
                    <p> <strong id="product">description: </strong>{product.description} </p>
                    <button
                        className="btn trade"
                        onClick={this.trade}
                        value={product._id}
                        type="submit">trade</button>
                </div>
                );
            }
        });

        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            // if there is no product, display no products to trade, else display list
            return (this.props.myProducts.length === 0) ?
                (
                    <div>
                        {back}
                        <h5>No Products to Trade</h5>
                    </div>
                ) : (
                    <div>
                        {back}
                        <div className="row">
                            {list}
                        </div>
                    </div>
                )
        }
    }
}

export default MyProducts