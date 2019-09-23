import React, { Component } from 'react';
import API from '../utils/API';
import MyUploads from "../components/MyUploads/index"
// import Container from "../components/Container";
import Container from "../components/Container/index";
import Products from "../components/Products/index"
class Market extends Component {
    constructor(props){
        super(props)
    this.state ={
        products: [],
        tradeRequest: false,
        myProducts: [],
        request: ""
    };
this.closeRequest=this.closeRequest.bind(this)
this.tradeRequest=this.tradeRequest.bind(this)
}
 
    // when the page is loaded, display all the items in the data
    componentDidMount() {
        // this.setState({tradeRequest:false})
        this.loadItems();
    
    }

    // save all data in name, condition, image, description
    loadItems = ()  => {
        console.log(this.props.user)
        API.display()
            .then(res =>

                this.setState({ products: res.data})
               
              
            )
            .catch(err => console.log(err));
    }
    // when button is clicked, display my items 
    tradeRequest = (name, value) => {
        console.log(name)
        // console.log(event.target.value)
        // event.preventDefault()
        this.setState({
            [name]: [value],
            tradeRequest:true
		})
       
        API.tradeRequest(this.props.user)
            .then(res =>
// console.log(res.data)
                this.setState({ myProducts: res.data})
        
            )
            .catch(err => console.log(err));
    }
    closeRequest(){
    this.setState({
        tradeRequest:false
    })
    }
    render() {
        console.log(this.state.request)
        console.log(this.state.products)
        console.log(this.state.myProducts);
        if(this.state.tradeRequest){
            console.log(this.state.request)
            return( 
                <Container>
                                    <MyUploads myProducts = {this.state.myProducts} request = {this.state.request} closeRequest = {this.closeRequest}/>

                </Container>    
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
            
                    // put this as component 
                    <Container>
                 <Products products=  {this.state.products} tradeRequest = {this.tradeRequest} user = {this.props.user}/>  
                 </Container>
        // this.state.products.map(product => {
        //     console.log(product.user);
            
        //     if (!(product.user == this.props.user)){
        //     return (<div>             <h1> product name: </h1>
        
        //         <p>{product.productname}</p>
        //         <h1>condition</h1>
        //         <p>{product.condition}</p>
        //         <h1>description</h1>
        //         <p>{product.description}</p>
        //         <button 
        //             className = "btn request"
        //             name = "request"
        //             value = {product._id}
        //             onClick = {this.tradeRequest}
        //             type = "submit">request</button>
        //             </div>
        //     );
        //     }
        // })
        )
    }
    }
}
export default Market;