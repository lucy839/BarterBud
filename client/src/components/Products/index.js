import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            request : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    // console.log(props.myProducts)
    handleSubmit(event){
		event.preventDefault()
		this.setState({
			[event.target.name]: event.target.value
        })
        {this.props.tradeRequest(this.state.name,this.state.value)}

    }
    // return (
    render() {
        let list = this.props.products.map(product => {
            console.log(product.user, this.props.user)

            // console.log(myProduct.productname)
                if (!(product.user == this.props.user)){

            return (<div>

                <h1> product name: </h1>
                <p>{product.productname}</p>
                <h1>condition</h1>
                <p>{product.condition}</p>
                <h1>description</h1>
                <p>{product.description}</p>
                <button
                    className="btn trade"
                    name = "request"
                    value = {product._id}
                    onClick = {this.handleSubmit}
                    type="submit">request</button>
            </div>
            );}
        });
     
        // if there is no books saved, display this
        return (this.props.products.length === 0) ? (
            <div>
               
                <h5>No Products to Trade</h5>

            </div>
        ) : (
                // else display books saved
                <div>
                
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

    }
}
export default Products