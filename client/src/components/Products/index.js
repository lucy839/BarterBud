import React, { Component } from 'react';

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
                    return (<div>
                        <img src = {product.image} style = {{width:"300px"}}/>
                        <h1> product name: </h1>
                        <p>{product.productname}</p>
                        <h1>condition</h1>
                        <p>{product.condition}</p>
                        <h1>description</h1>
                        <p>{product.description}</p>
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
                <div>
                    {list}
                </div>
            )
    }
}

export default Products