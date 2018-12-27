import React from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import { About, Home } from "../pages";

export default (): any => {
  return (
    <div>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact={true} component={Home} path="/" />
        <Route component={About} path="/about" />
      </AnimatedSwitch>
    </div>
  );
};
