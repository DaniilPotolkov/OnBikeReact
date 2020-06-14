import React from "react";
import Slider from "./../../Components/Slider/Slider";
import Modal from './../../Components/Modal/Modal';
import productImg from "./../../img/complect.jpg";
import Footer from "./../../Components/Footer/Footer";
import { connect } from 'react-redux'

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, modalId: null, };
  }
  toggleModal(id) {
    this.setState({ showModal: !this.state.showModal, modalId: id });
  }
  render() {
    return (<>
      <div className="all">
        <div className="container">
          <div className="col-lg-12">
            <h2 className="zagolovok">Популярные товары</h2>
          </div>
          <Slider modal={this.props.modal} products={this.props.products} />
        </div>
        {this.state.showModal ? <Modal product={this.props.products[this.state.modalId]} toggler={this.toggleModal.bind(this)} /> : null}
      </div>
    </>
    );
  }
}
const mapStateToPorps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addToCart: (e) => dispatch(actionAddToCart(e)),
    // delFromCart: (e) => dispatch(actionDelFromCart(e))
  }
}
export default connect(mapStateToPorps, mapDispatchToProps)(MainScreen)