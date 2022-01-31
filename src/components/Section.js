import React from "react";
import Header from "./Header";
import card2 from "./assets/card2.png";
import "./styles/Section.css";

const Section = () => {
  return (
    <section className="section">
      <Header />
      <div className="section__box">
        <div className="section__content">
          <h1 className="content__header">Secure Your Future</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            nobis porro excepturi commodi debitis labore sint voluptates, illum
            laborum aspernatur est beatae corrupti earum dolorem odio tempore
            eius voluptatum consectetur!
          </p>
          <p className="small__p">The Card of Future</p>
          <button>Get</button>
          <button>Discover</button>
        </div>

        <div className="section__img">
          <img src={card2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section;
