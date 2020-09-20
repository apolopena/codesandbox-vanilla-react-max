import React from "react";
import { hot } from "react-hot-loader";

import { DemoChoices } from "./components/demo/";

function App() {
  return (
    <div className="App">
      <h1>Vanilla React Start with Extras</h1>
      <h4>
        This page is a placeholder showcasing the following extras that this
        template comes with:
      </h4>
      <DemoChoices />
    </div>
  );
}

export default hot(module)(App);
