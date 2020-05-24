import React from "react";
import productImg from "./../../img/complect.jpg";

export default class ProductCard extends React.Component {
  render() {
      const { product } = this.props
    // console.warn(productImg);
    // const product = {
    //     name: 'zhopa',
    //     price: "900",
    //     img: productImg,
    // }
    console.warn( product);
    
    return (
      <div className="row">
        <div className="col-lg-3">
          <div className="tovar">
            <img src={this.props.product ? this.props.product.img : null} alt="" />
            <p>{this.props.product ? this.props.product.name : null}</p>
            <p className="price">{this.props.product ? this.props.product.price : null}₽</p>
            <button className="podrobnee">Подробнее о товаре</button>
          </div>
        </div>
      </div>
    );
  }
}
