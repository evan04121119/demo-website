import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import UserContainer from "../UserContainer";
import MainPageContainer from "../MainPageContainer";
import ErrorContainer from "../Error/ErrorContainer";
import SubscriptionContainer from "../Inscription/SubscriptionContainer";

// TODO: add ConnectedRouter, ProtectedRouter
class AppContainer extends Component {
  componentDidMount() {}

  render() {
    const { conf, history } = this.props;
    console.log(conf + " " + history);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/user/signup" component={SubscriptionContainer} />
          <Route exact path="/user/login" component={LoginContainer} />
          <Route exact path="/users" component={UserContainer} />
          <Route exact path="/" component={MainPageContainer} />
          <Route component={ErrorContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
