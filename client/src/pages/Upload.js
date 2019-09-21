import React, { Component } from 'react';
import API from "../utils/API";

class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            productname: '',
            condition: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state.productname, this.state.condition, this.state.description);
        API.upload(this.state)    
    }

    render() {
        console.log(this.props.user);
        return (
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
                            value={this.value}
                            onChange={this.handleChange}
                            required>
                            <option value ="new">New</option>
                            <option value ="great">Great</option>
                            <option value ="fair">Fair</option>
                            <option value ="okay">Okay</option>
                            <option value ="bad">Bad</option>
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
                            value={this.state.value}
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

        );
    }
}
export default Upload;