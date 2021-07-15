import React from "react";
import Button from "@material-ui/core/Button";
import "./MainPage.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="mainPage">Main page component</div>
      <div className="test">test</div>
      <div className="btn">
        <Button variant="contained" color="primary">
          MaterialUI Button
        </Button>
      </div>
    </React.Fragment>
  );
};
export default MainPage;
