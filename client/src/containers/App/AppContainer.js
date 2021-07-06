import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import InscriptionContainer from "../Inscription/InscriptionContainer";
import LoginContainer from "../Login/LoginContainer";
import UserContainer from "../UserContainer";

class AppContainer extends Component {
  componentDidMount() {
  }

  render() {
    const { conf, history } = this.props;
    console.log(conf + " " + history);

    return (
      <Switch>
        <Route exact path="/signup" Component={InscriptionContainer} />
        <Route exact path="/Login" Component={LoginContainer} />
        <Route exact path="/Users" Component={UserContainer} />
      </Switch>
    )
  }
}

export default AppContainer;