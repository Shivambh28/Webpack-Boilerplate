import React from "react";
import ReactDOM from 'react-dom';
import Greeting from "./components/greeting.js";
 
import css from "../sass/main.scss";

class World extends React.Component {
  render() {
    return (
    	<Greeting name="Worlds"/>
    )
  }
}
 
ReactDOM.render(<World/>, document.getElementById('app'));