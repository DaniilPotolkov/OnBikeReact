import React from "react";
import Modal from '../../Components/Modal/Modal';


export default class MotorScreen extends React.Component {
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
            <h2 className="zagolovok">Мотор-колеса</h2>
          </div>
        </div>
        {this.state.showModal ? <Modal product={this.props.products[this.state.modalId]} toggler={this.toggleModal.bind(this)}/> : null}
      </div>
      </>
    );
  }
}