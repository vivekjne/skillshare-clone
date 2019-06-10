import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
//Redux

import { Provider } from "react-redux";
// import store from "./store";
// import { loadUser } from "./actions/auth";
import "./App.css";
// import setAuthToken from "./utlis/setAuthToken";

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }
const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  return (
    // <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <section className="container">
           
            {/* <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              
            </Switch> */}
          </section>
        </Fragment>
      </Router>
    // </Provider>
  );
};

export default App;