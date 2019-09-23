import React from "react";
// import Nav from "../components/Nav";
import Container from "../components/Container";

function About() {
    return (
<Container>
        <div>
            {/* redundacy that needs to be fixed */}
            {/* <Nav></Nav> */}
            {/* <Container> */}
                <h1 className="text-center">
                    What is <strong>Barter Bud</strong>?
                </h1>
                <br></br>
                <p className="about">
                    Bartering is a tradition as old as time itself. In this modern
                    age, we have lost touch with this basic root of human civilization.
                    <br></br>
                    Introducing Barter Bud!
                    <br></br> 
                    Barter Bud allows users to create a
                    profile where they can upload pictures of things or services
                    they would like to trade and can interact and make offers with
                    other users for trading said items or services.
                    <br></br>
                    Barter bud helps the community. 
                    <br></br>
                    Barter Bud helps all the community with decluttering homes, offices, yards to make a better aesthetic backgrounds to have a peaceful mind. It is so important for our environment to Reduce landfills, with Reuse and Recycle Items as much as possible. Recycling saves energy, it also reduces greenhouse gas emissions. The community feels stronger connections since they interact and helping each other.
                  </p>
            {/* </Container> */}
        </div>
        </Container>    
    );
}
export default About;