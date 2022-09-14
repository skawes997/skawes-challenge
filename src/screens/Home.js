import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <NavBar />
        <section className="homepage">
          <p>
            welcome to food's <br />
            kitchen
          </p>
          <Link to="/CardList">
            <Button title={"go to menu"} className={"home-btn"} />
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
