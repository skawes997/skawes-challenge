import React, { useState } from "react";
import data from "../feeds.json";
import Cards from "./Card";
import NavBar from "./NavBar";

function CardList() {
  return (
    <>
      <NavBar />
      <div className="cards-container">
        <div className="cardList">
          {data.map((item, index) => {
            return <Cards key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CardList;
