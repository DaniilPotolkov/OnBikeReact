import React from "react";
import { Modal, Button } from "react-bootstrap";
import close from "./../../img/times-solid.svg";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import closeico from "./../../img/times-solid.svg";
export default class ModalComponent extends React.Component {
  buy(product_name) {
    alert(`Вы купили ${product_name}`);
  }
  render() {
    return (
      <Modal show={true} dialogClassName={"primaryModal"} size="xl">
        
      <ModalHeader>
        <ModalTitle><button className="button-close" onClick={() => this.props.toggler(this.props.product)}><img src={closeico} alt="close" className="modal-close-button" /></button> </ModalTitle>
      </ModalHeader>
      <ModalBody> <div className="modal-img">
        <div className="col-lg-8 offset-lg-2">
          <img className="modal-main-img"
                src={this.props.product ? this.props.product.img : null}
                alt="product img"
              />
        </div>
            </div>
            <div className="modal-text">
              
              <div className="row">
              <div className="col-lg-6">
                <p className="product-name-modal">
                {this.props.product ? this.props.product.name : null}
              </p>
              </div>
                <div className="col-lg-2">
                <p className="product-price-modal">
              {this.props.product ? this.props.product.price : null}
              </p>
              </div>
              <div className="col-lg-4">
<button className="modal-button" onClick={()=> this.buy(this.props.product ? this.props.product.name : 'товар')}>Купить</button>
              </div>
              </div>
              
              <p className="bold">Описание <hr /></p>
              <p className="modal-description">{this.props.product ? this.props.product.description : null}</p>
              </div>
        </ModalBody>
      <ModalFooter><button className="btn" onClick={() => this.props.toggler(this.props.product)}>Закрыть</button> </ModalFooter>
    </Modal>
    );
  }
}
