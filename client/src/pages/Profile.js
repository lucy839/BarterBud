
import React, { Component } from 'react';
import API from '../utils/API';
import ProfileList from "../components/ProfileList/index"
import Container from "../components/Container";
import Request from "../components/Request/index"
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thisProduct: "",
            tradeRequest: false,
            user: "",
            myProducts: [],
            requested: "",
            requestFrom:[],
            gotUser:false,
            email:""
        }
        // this.loadItems=this.loadItems.bind(this)
        // this.getMyList = this.getMyList.bind(this)
        // this.closeRequest=this.closeRequest.bind(this)
        this.tradeRequest=this.tradeRequest.bind(this)
        this.getRequested =this.getRequested.bind(this)
        this.getUser =this.getUser.bind(this)
    }

    // when the page is loaded, display all the items in the data
    componentDidMount() {
        // this.setState({tradeRequest:false})
        this.loadItems();

    }
    tradeRequest = (name, value) => {
         // *****
        let info = value.split(",")
        // console.log()
        console.log(info[0]    )
        // console.log(event.target.value)
        // event.preventDefault()
         // *****
        this.setState({
            [name]: [info[0]],
            tradeRequest: true,
            thisProduct:info[1]

        })

        this.getRequested(info[0]);
        
    }
    getRequested = (requested,obj) => {
        console.log(requested)
        // needs to get this value's product from the data 
        // API.tradeRequest(this.state.requested)

                API.getRequest(requested)
                    .then(res =>
        // console.log(res.data[0].user),
        this.setState({requestFrom: res.data,user:res.data[0].user }),
        // console.log(this.state.requestFrom),

        // this.getUser(res.data[0].user)
// this.getUser()
                        // this.setState({user: res.data[0].user})
                        // API.findUser(res.data[0].user).then(res2 =>
                        //     console.log(res2)
                    )
                    .catch(err => console.log(err));
              
// this.getUser();
    }
    getUser = () =>{
        // event.preventDefault();
        console.log(this.state.user)
        let user = this.state.user  
        // let data = this.state.requestFrom.data
        // console.log(data[0])
        API.findUser(user).then(res =>
            this.setState({gotUser:true, email:res.data[0].local.email })
                            // console.log(res.data[0].local.email)
                        )
                        .catch(err => console.log(err));
    }

    // save all data in name, condition, image, description
    loadItems = () => {
        API.display()
            .then(res =>
                // console.log(res),
                this.setState({ myProducts: res.data })

            )
            .catch(err => console.log(err));
    }
    // when button is clicked, display my items 
    //     tradeRequest = (name, value) => {
    //         console.log(name)
    //         // console.log(event.target.value)
    //         // event.preventDefault()
    //         this.setState({
    //             [name]: [value],
    //             tradeRequest:true
    // 		})

    //         API.tradeRequest(this.props.user)
    //             .then(res =>
    // // console.log(res.data)
    //                 this.setState({ myProducts: res.data})

    //             )
    //             .catch(err => console.log(err));
    //     }
    //     closeRequest(){
    //     this.setState({
    //         tradeRequest:false
    //     })
    // }
    // closeRequest() {
    //     this.setState({
    //         tradeRequest: false
    //     })
    // }
    render() {   if(this.state.user&&(!(this.state.gotUser))){
        this.getUser()
    }
        // if(this.state.tradeRequest){
        //     this.getUser();
        // }
        // console.log(this.state.gotUser)
         // *****
        if (this.state.gotUser){
            return (<Container><Request user={this.props.user}products= {this.state.requestFrom} email = {this.state.email}thisProduct = {this.state.thisProduct}> </Request></Container>)

        } 
        else {
            console.log(this.state.myProducts)
            return (<Container>
                <ProfileList products={this.state.myProducts} tradeRequest={this.tradeRequest} user={this.props.user} />
            </Container>)
        }

        // let list ;
        // if(this.props.user){
        //     this.setState({user: this.props.user})

        // }
        // let user = this.props.user

        // console.log(this.state.myProducts)
        // list = this.state.myProducts.map(product => {
        //     console.log(product)
        //     // console.log(myProduct.productname)
        //     return (<div>

        //         <h1> product name: </h1>
        //         <p>{product.productname}</p>
        //         <h1>condition</h1>
        //         <p>{product.condition}</p>
        //         <h1>description</h1>
        //         <p>{product.description}</p>
        //         {/* <button
        //             className="btn trade"
        //             onClick = {this.trade}
        //             // name = "trade"
        //             value = {product._id} */}
        //             {/* type="submit">trade</button> */}
        //     </div>
        //     );
        //     // return (

        //     //     // put this as component 
        //     //     <Container>

        //     //     </Container>
        //     //     // this.state.products.map(product => {
        //     //     //     console.log(product.user);

        //     //     //     if (!(product.user == this.props.user)){
        //     //     //     return (<div>             <h1> product name: </h1>

        //     //     //         <p>{product.productname}</p>
        //     //     //         <h1>condition</h1>
        //     //     //         <p>{product.condition}</p>
        //     //     //         <h1>description</h1>
        //     //     //         <p>{product.description}</p>
        //     //     //         <button 
        //     //     //             className = "btn request"
        //     //     //             name = "request"
        //     //     //             value = {product._id}
        //     //     //             onClick = {this.tradeRequest}
        //     //     //             type = "submit">request</button>
        //     //     //             </div>
        //     //     //     );
        //     //     //     }
        //     //     // })
        //     // )
        // });
        // }
        // if (this.state.myProducts){
        //     list=   <MyUploads myProducts={this.state.myProducts} />
        // }


        // console.log(user)
        // console.log(this.state.products)
        // console.log(this.state.myProducts);
        // if(this.state.tradeRequest){
        //     console.log(this.state.request)
        //     return( 
        //         <Container>
        //                             <MyUploads myProducts = {this.state.myProducts} request = {this.state.request} closeRequest = {this.closeRequest}/>

        //         </Container>    
        //         // this.state.myProducts.map(product => {

        //         // return (<div>          
        //         //          <button  className = "btn trade"type = "submit">back</button>     <h1> product name: </h1>

        //         //     <p>{product.productname}</p>
        //         //     <h1>condition</h1>
        //         //     <p>{product.condition}</p>
        //         //     <h1>description</h1>
        //         //     <p>{product.description}</p>
        //         //     <button 
        //         //         className = "btn trade"
        //         //         // onClick = {this.tradeRequest}
        //         //         type = "submit">trade</button>
        //         //         </div>
        //         // );
        //         // })

        //         )
        // }else {


    }

}
export default Profile;