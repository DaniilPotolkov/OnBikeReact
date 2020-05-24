import React from "react";
import Slider from "./../../Components/Slider/Slider";
import Modal from './../../Components/Modal/Modal';
import productImg from "./../../img/complect.jpg";
import Footer from "./../../Components/Footer/Footer";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, modalId: null,};
  }
  toggleModal(id) {
    this.setState({ showModal: !this.state.showModal, modalId: id});
  }
  render() {
    return (<>
      <div className="all">
        <div className="container">
          <div className="col-lg-12">
            <h2 className="zagolovok">Популярные товары</h2>
          </div>
          <Slider modal={this.props.modal} products={this.props.products}/>
        </div>
        {this.state.showModal ? <Modal product={this.props.products[this.state.modalId]} toggler={this.toggleModal.bind(this)}/> : null}
      </div>
      </>
    );
  }
}
