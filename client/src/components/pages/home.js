import React from "react";

function Home (){
    console.log("Welcome to the Home page");
    return (
        <header className="home-cta">
            <h1>
                Welcome to Drake Esdon's COMP2068 ToDo Application
                <br />
                <small>With React This Time!</small>
            </h1>
        </header>
    );
}

export default Home;