import React from "react";
import FALSY from "../api/falsy.js";

const Home = () => {
  return (
    <div>
      <ul>
        {FALSY.map(item => (
          <li key={item.key}>
            <h5> {item.message}</h5>
            <p> {item.q === false ? `nope` : `yup`} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
