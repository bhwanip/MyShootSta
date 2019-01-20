import React from "react";
import { Router, Route, IndexRoute, hashHistory  } from "react-router";
import {Header} from "./components";
import { ShootListContainer, UploadShootFormContainer } from "./containers";

const App = () => (
<Router history={hashHistory}>
    <Route path = "/" component={Header}>
      <IndexRoute component={ShootListContainer}/>
      <Route path="upload" component = {UploadShootFormContainer}/>
  </Route>
</Router>
);

export default App;
