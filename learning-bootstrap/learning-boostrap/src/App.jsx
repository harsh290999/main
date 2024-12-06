import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./component/appName";
import FirstRow from "./component/input-row";
import SecondRow from "./component/second-row";
import ThirdRow from "./component/third-row";
import "./App.css";
import AppHeading from "./component/clock-app-heading";
import { Thetext } from "./component/clock-app-context";
import { TimeDate } from "./component/clock-app-content";
import LearnMap from "./component/learning-map";

function App() {
  return (
    <div>
      
      <AppName />
      <div className="container text-center">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <center>
          <AppHeading />
          <Thetext />
          <TimeDate />
        </center>
      </div>
    </div>
  );
}

export default App;
