import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="my-app">
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Peppa" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="animal" breed="Havanese" />
    </div>
  );
};

// Creating instance of an App
render(<App />, document.getElementById("root"));
