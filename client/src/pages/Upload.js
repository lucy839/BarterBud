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
            requestFrom: "",
            image: "",
            loading:false,
            form:false,
            numProducts:0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveImage = this.saveImage.bind(this)
    }
    componentDidMount(){
       this.checkProducts()
    }
    checkProducts(){
        // let numProducts ;
        API.check().then(res =>
            this.setState({
                numProducts : res.data
            })
                
                
        )
      console.log(this.state.numProducts)
            // console.log(typeof(res.data)));
    
    }

    // set product informations as use enters
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            user: this.props.user
        })
    }

    // when button is clicked, save data to database,    and reset the form
    handleSubmit(event) {
        event.preventDefault();
        let product = {
            user:this.state.user,
            productname:this.state.productname,
            condition: this.state.condition,
            description: this.state.description,
            status:this.state.status,
            requestFrom:this.state.requestFrom,
            image:this.state.image
        }
        API.upload(product)
            .then(
                alert("Upload Complete!"),
                this.setState({
                    user: "",
                    productname: "",
                    condition:"",
                    description: "",
                    image:""
                })
            )
            .catch(err => console.log(err))
    }
    saveImage = async event => {    
        const files = event.target.files;
        const data = new FormData();
        data.append("file", files[0])
        data.append("upload_preset","luciya");
        this.setState({
            loading :true
        });
        // setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dcza05ust/image/upload",
            {
                method: "POST",
                body: data
            }
        )
        const file = await res.json()
        this.setState({
            image: file.secure_url,
            loading: false
        })
    }

    render() {
        // console.log(this.state.numProducts)
        return (
            this.state.numProduct<30 ? (
            <Container>
                <div>
                    <h2 id="upload">Upload</h2>
                    <form enctype="multipart/form-data" >
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Example file input</label>
                                <input type = "file"  name = "file"     onChange = {this.saveImage}/>
                                {this.state.loading ? (<h3> loading... </h3>) :(<img src = {this.state.image} style = {{width:"300px"}} alt = "img"/>)}
                        </div>
                    </form>
                    <form className="create-form" >
                        <div className="form-group">
                            <label htmlFor="ca">Product name:</label>
                            <input type="text"
                                id="productname"
                                name="productname"
                                value={this.state.productname}
                                onChange={this.handleChange}
                                required />
                            <div className="invalid-feedback">
                                Please enter product name.
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="condition">Condition:</label>
                            <select className="form-control"
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
                            <div className="invalid-feedback">
                                Please choose the condition of product.
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ca">Description:</label>
                            <input type="text"
                                id="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                required />
                            <div className="invalid-feedback">
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
            ): (<Container><h4>Too many products on market already. Please try later. </h4></Container>)
        );
    }
}

export default Upload;