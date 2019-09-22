import React, { Component } from 'react';
import API from '../utils/API';
import MyProducts from "../components/MyUploads/index"
// import Container from "../components/Container";

class Market extends Component {
    constructor(props){
        super(props)
    this.state ={
        products: [],
        tradeRequest: false,
        myProducts: []
    };}
 
    // when the page is loaded, display all the items in the data
    componentDidMount() {
        // this.setState({tradeRequest:false})
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
        API.tradeRequest(this.props.user)
            .then(res =>
// console.log(res.data)
                this.setState({ myProducts: res.data})
        
            )
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state.products)
        console.log(this.state.myProducts);
        if(this.state.tradeRequest){
            return(   
                <MyProducts myProducts = {this.state.myProducts}/>
                // this.state.myProducts.map(product => {

                // return (<div>          
                //          <button  className = "btn trade"type = "submit">back</button>     <h1> product name: </h1>
            
                //     <p>{product.productname}</p>
                //     <h1>condition</h1>
                //     <p>{product.condition}</p>
                //     <h1>description</h1>
                //     <p>{product.description}</p>
                //     <button 
                //         className = "btn trade"
                //         // onClick = {this.tradeRequest}
                //         type = "submit">trade</button>
                //         </div>
                // );
                // })

                )
        }else {
       
        return(
        this.state.products.map(product => {
            console.log(product.user);
            if (!(product.user == this.props.user)){
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
            }
        })
        )
    }
    }
}
export default Market;