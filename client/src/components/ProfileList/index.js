import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

class ProfileList extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     request : ""
        // }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    // console.log(props.myProducts)
    handleSubmit(event){
        event.preventDefault()
		// this.setState({
		// 	[event.target.name]: event.target.value
        // })
        console.log(event.target.value)
        this.props.tradeRequest([event.target.name], event.target.value)
        // this.props.getUser()

    }
   

    // return (
    render() {
        let button ;
        // console.log(this.state.request) 
        let list = this.props.products.map(product => {
            console.log(product.user, this.props.user)
            console.log(product.requestFrom)
            if (product.status == "process"){
                button = <button
                    className = "btn"
                    name = "requested"
                    value = {product.requestFrom}
                    onClick = {this.handleSubmit}
                    type = "submit">Trade Requested</button>
            }
            // console.log(myProduct.productname)
                if (product.user == this.props.user){
                
                return (<div>

                <h1> product name: </h1>
                <p>{product.productname}</p>
                <h1>condition</h1>
                <p>{product.condition}</p>
                <h1>description</h1>
                <p>{product.description}</p>
                {button}
                {/* <button
                    className="btn trade"
                    name = "request"
                    value = {product._id}
                    onClick = {this.handleSubmit}
                    type="submit">request</button>*/}
            </div> 
            );} 
        });
     
        // if there is no books saved, display this
        return (<div>   {list}</div>
                
                 
        )

    }
}
export default ProfileList