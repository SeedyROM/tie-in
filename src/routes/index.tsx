import React from "react";
import { Route } from "react-router-dom";

import { About, Home } from "../pages";

export default (): any => {
  return (
    <div>
      <Route exact={true} component={Home} path="/" />
      <Route component={About} path="/about" />
    </div>
  );
};
