import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import API from '../../utils/API';

class MyUploads extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectTo:null,
            trade:""
        }
        this.back = this.back.bind(this)
        this.trade =this.trade.bind(this)

    }
    // console.log(props.myProducts)
    back(){
        this.props.closeRequest();
        this.setState({redirectTo: '/market' })

    }
    // when this button is clicked, update status of both the user's and the product's user status to process
    trade(event){
        console.log(this.props.request)
        // ,event.target.value
        let test = [this.props.request, event.target.value]
        API.requestTrade(test).then(res =>
            // conssole.log(res)
            // this.setState({ products: res.data})
           
          alert("Request Sent!"),
          this.back()
        )
        .catch(err => console.log(err))
    }
    // return (
    render() {
        console.log(this.props.request)
        
        let back = <button className="btn trade" type="submit" onClick = {this.back}>back</button>;
        let list = this.props.myProducts.map(product => {
            console.log(product)
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
                    onClick = {this.trade}
                    // name = "trade"
                    value = {product._id}
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