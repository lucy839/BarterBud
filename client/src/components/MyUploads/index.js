import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class MyUploads extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectTo:null
        }
        this.back = this.back.bind(this)

    }
    // console.log(props.myProducts)
    back(){
        this.props.closeRequest();
        this.setState({redirectTo: '/market' })

    }
    // return (
    render() {
     
        let back = <button className="btn trade" type="submit" onClick = {this.back}>back</button>;
        let list = this.props.myProducts.map(product => {
            // console.log(myProduct.productname)
            return (<div>

                <h1> product name: </h1>
                <p>{product.productname}</p>
                <h1>condition</h1>
                <p>{product.condition}</p>
                <h1>description</h1>
                <p>{product.description}</p>
                <button
                    className="btn trade"
                    // onClick = {this.tradeRequest}
                    type="submit">trade</button>
            </div>
            );
        });
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        // if there is no books saved, display this
        return (this.props.myProducts.length === 0) ? (
            <div>
                {back}
                <h5>No Products to Trade</h5>

            </div>
        ) : (
                // else display books saved
                <div>
                    {back}
                    {list}
                    {/* this.props.myProducts.map(product => {
                return (<div>
                    
                    <h1> product name: </h1>
                    <p>{product.productname}</p>
                    <h1>condition</h1>
                    <p>{product.condition}</p>
                    <h1>description</h1>
                    <p>{product.description}</p>
                    <button
                        className="btn trade"
                        // onClick = {this.tradeRequest}
                        type="submit">trade</button>
                </div>
                );
            })*/}
                </div>)

    }}
}
export default MyUploads