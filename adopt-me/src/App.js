import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div id="my-app">
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

// Creating instance of an App
render(<App />, document.getElementById("root"));
