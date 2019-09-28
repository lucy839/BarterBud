import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class Request extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accept: ""
        }
        this.back = this.back.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // when function is called, call closeRequest function to close the modal and redirect to market page
    back() {
        this.props.closeRequest();
        this.setState({ redirectTo: '/profile' })
    }
    // when button is clicked, set state with product info and call traded function
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        });
        this.traded(event.target.value);
    }

    // when called, trade product and user in the database
    traded(value) {
        let products = [value, this.props.thisProduct];
        API.traded(products).then(res =>
            API.switchUser([this.props.user, res.data.user])
                .then(
                    res => console.log(res)
                )
        ).catch(err => console.log(err))
    }

    render() {
        // display the product
        let back = <button className="btn back" type="submit" onClick={this.back}><i className="fas fa-arrow-alt-circle-left"></i></button>;
        let list = this.props.products.map(product => {
            return (
                <div>
                    <img src={product.image} style={{ width: "300px" }} alt ="img" />
                    <p> <strong id="product">PRODUCT NAME: </strong>{product.productname} </p>
                    <p> <strong id="product">CONDITION: </strong>{product.condition} </p>
                    <p> <strong id="product"> DESCRIPTION: </strong>{product.description} </p>
                    <p> <strong id="product"> EMAIL: </strong>{this.props.email} </p>
                    <button
                        className="btn trade"
                        name="accept"
                        value={product._id}
                        onClick={this.handleSubmit}
                        type="submit">Accept
                    </button>
                </div>
            );
        });

        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    {back}
                    {list}
                </div>
            );
        }
    }
}

export default Request