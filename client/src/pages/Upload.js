import React, { Component } from 'react';
import API from "../utils/API";
import Container from "../components/Container/index"

class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            productname: "",
            condition: "",
            description: "",
            status: "available",
            requestFrom: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // set product informations as use enters
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            user: this.props.user
        })
    }

    // when button is clicked, save data to database, and reset the form
    handleSubmit(event) {
        event.preventDefault();
        API.upload(this.state)
            .then(
                alert("Upload Complete!"),
                this.setState({
                    user: "",
                    productname: "",
                    description: ""
                })
            )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <div>
                    <h2 id="upload">Upload</h2>
                    <form class="create-form" >
                        <div class="form-group">
                            <label for="ca">Product name:</label>
                            <input type="text"
                                id="productname"
                                name="productname"
                                value={this.state.productname}
                                onChange={this.handleChange}
                                required />
                            <div class="invalid-feedback">
                                Please enter product name.
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="condition">Condition:</label>
                            <select class="form-control"
                                id="condition"
                                name="condition"
                                onChange={this.handleChange}
                                required>
                                <option value="" disabled selected>Select</option>
                                <option value="new">New</option>
                                <option value="great">Great</option>
                                <option value="fair">Fair</option>
                                <option value="okay">Okay</option>
                                <option value="bad">Bad</option>
                            </select>
                            <div class="invalid-feedback">
                                Please choose the condition of product.
                        </div>
                        </div>
                        <div class="form-group">
                            <label for="ca">Description:</label>
                            <input type="text"
                                id="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                required />
                            <div class="invalid-feedback">
                                Please enter description of product.
                        </div>
                        </div>
                        <button
                            id="submit"
                            type="submit"
                            onClick={this.handleSubmit}>submit</button>
                    </form>
                </div>
            </Container>
        );
    }
}

export default Upload;