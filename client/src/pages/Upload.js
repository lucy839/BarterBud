import React, { Component } from 'react';

class Upload extends Component {
    // constructor() {
    state = {
        productname: '',
        condition: '',
        description:''
    }    
    handleChange(event){
        this.setState({
            [event.target.name]:evnet.target.value
        })
    } 
    // }
    render() {
        console.log(this.state.productname, this.state.condition, this.state.description);
        return (
            <div>
                <h2 id="upload">Upload</h2>
                <form class="create-form" >
                    <div class="form-group">
                        <label for="ca">Product name:</label>
                        <input type="text" 
                            id = "productname" 
                            name = "productname" 
                            value = {this.state.productname}
                            onChange = {this.handleChange}
                            required />
                        <div class="invalid-feedback">
                            Please enter product name.
                            </div>
                    </div>
                    <div class="form-group">
                        <label for="condition">Condition:</label>
                        <select class="form-control" 
                            id = "condition" 
                            name = "condition"
                            value = {this.state.value}
                            onChange = {this.handleChange}
                            required>
                            <option>New</option>
                            <option>Great</option>
                            <option>Fair</option>
                            <option>Okay</option>
                            <option>Bad</option>
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
                            value = {this.state.value}
                            onChange = {this.handleChange}
                            required />
                        <div class="invalid-feedback">
                            Please enter description of product.
                        </div>
                    </div>
                    <button id="submit" type="submit">submit</button>
                </form>
            </div>
    
        );
    }
}
export default Upload;