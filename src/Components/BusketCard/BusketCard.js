import React from "react";
import productImg from "./../../img/complect.jpg";
export default class BusketScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalId: null,
    };
  }
  render() {
    const { cart } = this.props
    console.warn(cart);

    return (
      <>

        <div className="container">
          <div className="busket-row">
            <div className="row">

              <div className="col-lg-2 offset-lg-1">
                <div className="busket-img">
                  <img src={cart.img} alt="" />
                </div>

              </div>
              <div className="col-lg-3 ">
                <p className="busket-name bold">{cart.name}</p>
              </div>
              <div className="col-lg-3">
                <p className="busket-price">
                  {`x${cart.good_count} ${cart.good_count * cart.price} р.`}
                </p>
              </div>
              <div className="col-lg-2 offset-lg-1">
                <button className="btn-add">Добавить</button>
                <button className="btn-del">Удалить</button>
              </div>
            </div>
          </div>


        </div>

      </>
    );
  }
}
