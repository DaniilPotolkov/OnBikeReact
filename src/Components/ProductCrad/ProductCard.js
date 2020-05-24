import React from "react";
import Modal from './../Modal/Modal'
import productImg from "./../../img/complect.jpg";

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      showModal: false
    }
  }
// modal(product) {
//   console.warn(product);

//   return (
//     <div className="absolute-modal">
//       <div className="container">
//         <div className="tovar">
//           <img
//             src={this.props.product ? this.props.product.img : null}
//             alt=""
//           />
//           <p>{this.props.product ? this.props.product.name : null}</p>
//           <p className="price">
//             {this.props.product ? this.props.product.price : null}₽
//           </p>
//           <button
//             className="podrobnee"
//             onClick={() => this.modal(this.props.product)}
//           >
//             Подробнее о товаре
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
  toggleModal() {
    this.setState({ showModal: !this.state.showModal})
    console.warn(this.state.showModal);
    
  }
  render() {
    const { product } = this.props;
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
              {this.props.product ? this.props.product.price : null}₽
            </p>
            <button
              className="podrobnee"
              onClick={() => this.toggleModal()}
            >
              Подробнее о товаре
            </button>
          </div>
        </div>
      </div>
      {this.state.showModal ? <Modal product={this.props.product}/> : null}
      </>
    );
  }
}
