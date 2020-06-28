import React from "react";
export default class BusketScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalId: null,
    };
  }
  delete() {
    const { cart, dec, del } = this.props;
    if (cart.good_count > 1) {
      dec(cart.product_id);
      console.warn("press dec");
    } else {
      del(cart.product_id);
    }
  }
  incrise() {
    const { cart, inc } = this.props;
    inc(cart.product_id);
    console.warn("press inc");
  }

  render() {
    const { cart } = this.props;
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
                  {`x${cart.good_count} ${cart.good_count * cart.price} `} &#8381;
                </p>
              </div>
              <div className="col-lg-2 offset-lg-1">
                <button className="btn-add" onClick={() => this.incrise()}>
                  Добавить
                </button>
                <button className="btn-del" onClick={() => this.delete()}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
