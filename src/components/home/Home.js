import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h2>Heading for the Home page</h2>
    <p>some details on react home page</p>
    <Link to="about">About</Link>
  </div>
);

export default HomePage;
