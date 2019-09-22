import React from 'react';

function MyUploads(props) {
    console.log(props.myProducts)

    // return (

        // if there is no books saved, display this
        return (props.myProducts.length === 0) ? (
            <div>

                <h5>No Products to Trade</h5>

            </div>
        ) : (
        // else display books saved

        // <div>
            props.myProducts.map(product => {
                // console.log(myProduct.productname)
                return (<div>
                    <button className="btn trade" type="submit">back</button>     <h1> product name: </h1>

                    <p>{product.productname}</p>
                    <h1>condition</h1>
                    <p>{product.condition}</p>
                    <h1>description</h1>
                    <p>{product.description}</p>
                    <button
                        className="btn trade"
                        // onClick = {this.tradeRequest}
                        type="submit">trade</button>
                </div>
                );
            }))
 
}

export default MyUploads