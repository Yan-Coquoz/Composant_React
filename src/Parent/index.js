import React from "react";
import Enfant from "../Enfant";
const Parent = (props) => {
  //   Composition (children) VS Heritage (Pas de d'exemple)
  // https://fr.reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper
  return (
    <div>
      <Enfant>Super</Enfant>
    </div>
  );
};

export default Parent;
