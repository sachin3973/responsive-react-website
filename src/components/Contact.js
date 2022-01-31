import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Link to={"/"} className="a-icon">
        <ArrowBack className="icon" />
      </Link>
      <div className="input__container">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
