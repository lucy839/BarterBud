import React, { Component } from 'react';

class ProfileList extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // when clicked, call tradeRequest from the props with this product
    handleSubmit(event) {
        event.preventDefault();
        this.props.tradeRequest([event.target.name], event.target.value)
    }

    render() {
        let button;
        // go through products received from props
        let list = this.props.products.map(product => {
            // if status is process, button will be given
            if (product.status == "process") {
                button = <button
                    className="btn"
                    name="requested"
                    value={[product.requestFrom, product._id]}
                    onClick={this.handleSubmit}
                    type="submit">Trade Requested</button>
            } else if (product.status =="traded"){
                button = <h3>New Item! (traded)</h3>
                            
               }   else {
                // else no button
                button = <div></div>
            }

            // only display my products
            if (product.user == this.props.user) {
                return (<div>
                    <h1> product name: </h1>
                    <p>{product.productname}</p>
                    <h1>condition</h1>
                    <p>{product.condition}</p>
                    <h1>description</h1>
                    <p>{product.description}</p>
                    {button}
                </div>
                );
            }
        });

        return (
            <div>
                {list}
            </div>
        )
    }
}
export default ProfileList