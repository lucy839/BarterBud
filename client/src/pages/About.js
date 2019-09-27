import React from "react";
import Container from "../components/Container";

// simple about page
function About() {
    return (
        <Container>
            <div>
                <h1 className="text-center">
                    What is <strong id ="title">Barter Bud</strong>?
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
                    <br></br>
                    <br></br>
                    <h5 id="highlight">Enjoy!</h5>
                    <a href="https://lucylee.kim/">
                        <img id="portfolio" src={require("./images/logo.png")} alt="portfolio" />
                    </a>
                    <a href="https://github.com/lucy839">
                        <img id="github" src={require("./images/github.svg")} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/youngju-lucy-lee-4b9578178/">
                        <img id="linkedin" src={require("./images/linkedin.png")} alt="linkedin" />
                    </a>
                </p>
            </div>
        </Container>
    );
}

export default About;