import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Header,
  Portfolio,
  About,
  NewsLetter,
  GetInTouch,
} from "./Components";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/styles/rsuite-default.css";
import { BackTop } from "antd";
import FlightIcon from "@material-ui/icons/Flight";

function App() {
  const style = {
    height: 60,
    width: 60,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "transparent",
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  };
  return (
    <>
      <AppBar />
      <Header />
      <Portfolio />
      <About />
      <NewsLetter />
      <GetInTouch />
      {/*  <BackTop>
      <div style={style}>
        <FlightIcon style={{ fontSize: 62 }} />
      </div>
    </BackTop> */}
    </>
  );
}

export default App;
