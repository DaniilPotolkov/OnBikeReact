import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCrad/ProductCard";
import productImg from "./../../img/complect.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class CustomSlider extends React.Component {
  render() {
    const products = [
      {
        name: "zhopa",
        price: "900",
        img: productImg,
      },
      {
        name: "zhopa1",
        price: "900",
        img: productImg,
      },
      {
        name: "zhopa2",
        price: "900",
        img: productImg,
      },
      {
        name: "zhopa3",
        price: "900",
        img: productImg,
      },
      {
        name: "zhopa4vozmexdie",
        price: "900",
        img: productImg,
      },
      {
        name: "zhopa5vozvracheniechlenavzhopudani",
        price: "900",
        img: productImg,
      },
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div>
              <ProductCard product={product}/>
            </div>
          );
        })}
      </Slider>
    );
  }
}
