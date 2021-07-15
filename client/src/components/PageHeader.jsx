import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHeader extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="pageHeader">
        <Helmet>
          <title>page header</title>
        </Helmet>
      </div>
    );
  }
}
export default PageHeader;
