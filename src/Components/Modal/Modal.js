import React from "react";

export default class Modal extends React.Component {
  render() {
    console.warn(this.props.product);
    return (
      <div className="absolute-modal">
        <div className="container">
          <div className="tovar">
            <img
              src={this.props.product ? this.props.product.img : null}
              alt=""
            />
            <p>{this.props.product ? this.props.product.name : null}</p>
            <p className="price">
              {this.props.product ? this.props.product.price : null}₽
            </p>
            <button
              className="podrobnee"
              onClick={() => this.modal(this.props.product)}
            >
              Подробнее о товаре
            </button>
          </div>
        </div>
      </div>
    );
  }
}
