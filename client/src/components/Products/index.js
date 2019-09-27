import React, { Component } from "react";
import "./style.css";

class Products extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // when button is clicked, call tradeRequest function from props
    handleSubmit(event) {
        event.preventDefault();
        this.props.tradeRequest([event.target.name], event.target.value);
    }

    render() {
        // format the products from props
        let list = this.props.products.map(product => {
            if (!(product.user == this.props.user)) {
                if (!(product.status == "traded")){
                    return (<div className ="col-md-4 products">
                        <img src = {product.image} style = {{width:"300px"}}/>
                        <p> <strong id = "product">product name: </strong>{product.productname} </p>
                        <p> <strong id = "product">condition: </strong>{product.condition} </p>
                        <p> <strong id = "product">description: </strong>{product.description} </p>
                        <button
                            className="btn trade"
                            name="request"
                            value={product._id}
                            onClick={this.handleSubmit}
                            type="submit">request</button>
                    </div>
                    );
                }
            }
        });

        // if there is no product, display no products to trade, else display list
        return (this.props.products.length === 0) ?
            (
                <div>
                    <h5>No Products to Trade</h5>
                </div>
            ) : (
                <div className = "row">
                    {list}
                </div>
            )
    }
}

export default Products