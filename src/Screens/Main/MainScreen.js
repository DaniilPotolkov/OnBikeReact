import React from "react";
import Slider from "./../../Components/Slider/Slider";
import Modal from './../../Components/Modal/Modal';
import productImg from "./../../img/complect.jpg";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, modalId: null,};
  }
  toggleModal(id) {
    console.warn('main', this.state);
    this.setState({ showModal: !this.state.showModal, modalId: id});
  }
  render() {
    const products = [
      {
        product_id: 0,
        name: "zhopa",
        price: "900",
        img: productImg,
      },
      {
        product_id: 1,
        name: "zhopa1",
        price: "900",
        img: productImg,
      },
      {
        product_id: 2,
        name: "zhopa2",
        price: "900",
        img: productImg,
      },
      {
        product_id: 3,
        name: "zhopa3",
        price: "900",
        img: productImg,
      },
      {
        product_id: 4,
        name: "zhopa4vozmexdie",
        price: "900",
        img: productImg,
      },
      {
        product_id: 5,
        name: "zhopa5vozvracheniechlenavzhopudani",
        price: "900",
        img: productImg,
      },
      {
        product_id: 6,
        name: "zhopa5vozvracheniechlenavzhopudani",
        price: "900",
        img: productImg,
      },
      {
        product_id: 7,
        name: "zhopa5vozvracheniechlenavzhopudani",
        price: "900",
        img: productImg,
      },
    ];
    return (
      <div className="all">
        <div className="container">
          <div className="col-lg-12">
            <h2 className="zagolovok">Популярные товары</h2>
          </div>
          <Slider modal={this.toggleModal.bind(this)} products={products}/>
        </div>
        {this.state.showModal ? <Modal product={products[this.state.modalId]} toggler={this.toggleModal.bind(this)}/> : null}
      </div>
    );
  }
}
