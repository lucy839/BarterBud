import React, { Component } from "react";
import API from "../utils/API";
import MyUploads from "../components/MyUploads/index";
import Container from "../components/Container/index";
import Products from "../components/Products/index";

class Market extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            tradeRequest: false,
            myProducts: [],
            request: ""
        };
        this.closeRequest = this.closeRequest.bind(this)
        this.tradeRequest = this.tradeRequest.bind(this)
    }

    // when the page is loaded, display all the items in the data
    componentDidMount() {
        this.loadItems();

    }

    // save all data in state
    loadItems() {
        API.display()
            .then(res =>
                this.setState({ products: res.data })
            )
            .catch(err => console.log(err));
    }

    // when button is clicked, display my items 
    tradeRequest = (name, value) => {
        this.setState({
            [name]: [value],
            tradeRequest: true
        })
        API.tradeRequest(this.props.user)
            .then(res =>
                this.setState({ myProducts: res.data })
            )
            .catch(err => console.log(err));
    }

    // close the list of my products    
    closeRequest() {
        this.setState({
            tradeRequest: false
        })
    }

    render() {
        // If product is chosen, display my products, if not display all available products
        if (this.state.tradeRequest) {
            return (  
                <Container>
                    <MyUploads myProducts={this.state.myProducts} request={this.state.request} closeRequest={this.closeRequest} />
                </Container>
            )
        } else {
            return (
                <Container>
                    <Products products={this.state.products} tradeRequest={this.tradeRequest} user={this.props.user} />
                </Container>
            )
        }
    }
}
export default Market;