import React, { Component } from "react";
import API from "../../utils/API";

class Request extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accept: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
        let list = this.props.products.map(product => {
            return (
                <div>
                    <h1> product name: </h1>
                    <p>{product.productname}</p>
                    <h1>condition</h1>
                    <p>{product.condition}</p>
                    <h1>description</h1>
                    <p>{product.description}</p>
                    <h1>email</h1>
                    <p>{this.props.email}</p>
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

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Request