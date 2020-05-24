import React from "react";
import Slider from "./../../Components/Slider/Slider";

export default class MainScreen extends React.Component {
  render() {
    return (
      <div className="all">
        <div className="container">
          <div className="col-lg-12">
            <h2 className="zagolovok">Популярные товары</h2>
          </div>
          <Slider />
        </div>
      </div>
    );
  }
}
