import React, { Component } from "react";
import API from "../utils/API";
import ProfileList from "../components/ProfileList/index";
import Container from "../components/Container";
import Request from "../components/Request/index";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thisProduct: "",
            tradeRequest: false,
            user: "",
            myProducts: [],
            requested: "",
            requestFrom: [],
            gotUser: false,
            email: ""
        }
        this.tradeRequest = this.tradeRequest.bind(this)
        this.getRequested = this.getRequested.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    // when the page is loaded, display my items in the data
    componentDidMount() {
        this.loadItems();
    }

    // save all data in name, condition, image, description
    loadItems = () => {
        API.display()
            .then(res =>
                this.setState({ myProducts: res.data })
            )
            .catch(err => console.log(err));
    }

    // when button is clicked, set chosed products' information to state
    // then call getrequested function with requested product id
    tradeRequest = (name, value) => {
        let info = value.split(",")
        this.setState({
            [name]: [info[0]],
            tradeRequest: true,
            thisProduct: info[1]
        });
        this.getRequested(info[0]);
    }

    // get product information from database, and set users name to state
    getRequested = (requested) => {
        API.getRequest(requested)
            .then(res =>
                this.setState({ requestFrom: res.data, user: res.data[0].user }),
            )
            .catch(err => console.log(err));
    }

    // get user's data from database
    getUser() {
        let user = this.state.user
        API.findUser(user)
            .then(res =>
                this.setState({ gotUser: true, email: res.data[0].local.email })
            )
            .catch(err => console.log(err));
    }

    render() {
        // if user data is not achieved, get user
        if (this.state.user && (!(this.state.gotUser))) {
            this.getUser();
        }

        // if user data is achieved, display request component
        // else display my products
        if (this.state.gotUser) {
            return (
                <Container>
                    <Request user={this.props.user} products={this.state.requestFrom} email={this.state.email} thisProduct={this.state.thisProduct}> </Request>
                </Container>
            );
        } else {
            return (
                <Container>
                    <ProfileList products={this.state.myProducts} tradeRequest={this.tradeRequest} user={this.props.user} />
                </Container>
            );
        }
    }
}

export default Profile;