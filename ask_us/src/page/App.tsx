import React, { FC, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { connectFirebase } from "shared/Firebase";
import GlobalStyle from "styles/index";
import { Main, Create } from "container/index";

const App: FC = () => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      connectFirebase();
    }
  },        [didMountRef]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" render={() => <Main />} exact />
        <Route path="/create" render={() => <Create />} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
