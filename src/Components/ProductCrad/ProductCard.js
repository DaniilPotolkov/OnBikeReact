import React from "react";
import Modal from './../Modal/Modal'
import productImg from "./../../img/complect.jpg";

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      showModal: false,
      modalId: null,
    }
  }
  render() {
    
    return (
      <>
      <div className="">
        <div className="">
          <div className="tovar">
            <img
              src={this.props.product ? this.props.product.img : null}
              alt=""
            />
            <p>{this.props.product ? this.props.product.name : null}</p>
            <p className="price">
              {this.props.product ? this.props.product.price : null}
            </p>
            <button
              className="podrobnee"
              onClick={() => this.props.modal(this.props.product.product_id)}
            >
              Подробнее о товаре
            </button>
          </div>
        </div>
      </div>
      
      </>
    );
  }
}
