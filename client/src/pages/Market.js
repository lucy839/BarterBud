import React, { Component } from 'react';
import API from '../utils/API';
// import Container from "../components/Container";

class Market extends Component {
    state ={
        products: [],
        tradeRequest: false,
        myProducts: []
    };
 
    // when the page is loaded, display all the items in the data
    componentDidMount() {
        this.loadItems();
    }

    // save all data in name, condition, image, description
    loadItems = ()  => {
        API.display()
            .then(res =>

                this.setState({ products: res.data})
               
              
            )
            .catch(err => console.log(err));
    }
    // when button is clicked, display my items 
    tradeRequest = () => {
        this.setState({tradeRequest:true});
        API.tradeRequest()
            .then(res =>
                this.setState({ myProducts: res.data})
            )
            .catch(err => console.log(err));
    }
    render() {
        if(this.tradeRequest){
            return(    
                this.state.myProducts.map(product => {

                return (<div>             <h1> product name: </h1>
            
                    <p>{product.productname}</p>
                    <h1>condition</h1>
                    <p>{product.condition}</p>
                    <h1>description</h1>
                    <p>{product.description}</p>
                    <button 
                        className = "btn trade"
                        // onClick = {this.tradeRequest}
                        type = "submit">trade</button>
                        </div>
                );}))
        }else {
        console.log(this.state.products);
        return(
        this.state.products.map(product => {

            return (<div>             <h1> product name: </h1>
        
                <p>{product.productname}</p>
                <h1>condition</h1>
                <p>{product.condition}</p>
                <h1>description</h1>
                <p>{product.description}</p>
                <button 
                    className = "btn request"
                    onClick = {this.tradeRequest}
                    type = "submit">request</button>
                    </div>
            );
        })
        )
    }
    }
}
export default Market;