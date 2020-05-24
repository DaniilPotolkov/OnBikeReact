import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class ModalComponent extends React.Component {
  render() {
    console.warn(this.props.product);
    return (
      <div className="absolute-modal">
        <div className="container">
            <div className="modal-container">
          <img
            src={this.props.product ? this.props.product.img : null}
            alt="product img"
          />
          <p>{this.props.product ? this.props.product.name : null}</p>
          <p className="price">
            {this.props.product ? this.props.product.price : null}₽
          </p>
          <button
            className="close"
            onClick={() => this.props.toggler(this.props.product)}
          >
            Закрыть
          </button>
          </div>
        </div>
      </div>
    );
  }
}
