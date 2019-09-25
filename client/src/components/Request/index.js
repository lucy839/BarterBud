import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

class Request extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accept : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    // console.log(props.myProducts)
    handleSubmit(event){
        console.log(this.props.thisProduct)
        event.preventDefault()
		this.setState({
			[event.target.name]: event.target.value
        })
        console.log(event.target.value)
        this.traded(event.target.value);
        // this.props.tradeRequest([event.target.name], event.target.value)

    }
    traded (value){
        let products = [value, this.props.thisProduct];
        // let users ;
        API.traded(products).then(res =>
            // res => console.log(res)
            API.switchUser([this.props.user,res.data.user]).then(
                res=> console.log(res)
            )
            // alert("Please c  ommunicate via "+ this.props.email)  
             ).catch(err => console.log(err))
    }

    // return (
    render() {
        // let button    ;
        // let data = this.props.products.data 
        // *****
        console.log(this.props.user )
        console.log(this.props.products) 
        let list = this.props.products.map(product => {
            // console.log(product.user, this.props.user)
            console.log(product.requestFrom)
            // if (product.status == "process"){
            //     button = <button
            //         className = "btn"
            //         name = "requested"
            //         value = {product.requestFrom}
            //         onClick = {this.handleSubmit}
            //         type = "submit">Trade Requested</button>
            // }
            // console.log(myProduct.productname)
                // if (product.user == this.props.user){
                
                return (<div>

                <h1> product name: </h1>
                <p>{product.productname}</p>
                <h1>condition</h1>
                <p>{product.condition}</p>
                <h1>description</h1>
                <p>{product.description}</p>
                <h1>email</h1>
                <p>{this.props.email}</p>
                {/* {button} */}
                <button
                    className="btn trade"
                    name = "accept"
                    value = {product._id}
                    onClick = {this.handleSubmit}
                    type="submit">Accept</button>
            </div> 
            );
        // } 
        });
     
        // if there is no books saved, display this
        return (<div>   {list}</div>
                
                 
        )

    }
}
export default Request