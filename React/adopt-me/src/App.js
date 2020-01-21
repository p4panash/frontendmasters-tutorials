import React from "react";
import { render } from "react-dom";
import SearchPrams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchPrams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
