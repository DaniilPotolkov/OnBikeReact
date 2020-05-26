import React from "react";
import productImg from "./../../img/complect.jpg";
import BusketCard from "./../../Components/BusketCard/BusketCard"

export default class BusketScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalId: null,
    };
  }
  render() {
    return (
      <>
        <h2>
          Корзина
        </h2>
        <div className="container">
        <div className="busket-row">
          <div className="row">
          <div className="col-lg-3 offset-lg-2 col-md-3 offset-lg-2">
            <p className="many-tovar">Количество товаров: <span className="bold">1</span></p>
          </div>
          <div className="col-lg-3 col-md-3">
           <p className="sum-tovar"> Сумма цены товаров: <span className="bold">21 000р.</span></p>
          </div>
          <div class="col-lg-4 col-md-4">
            <button className="btn-buy">Оплатить</button>
          </div>
          </div>
          </div>
          <p className="bold">Выбранные товары</p>
          <hr />
          
        </div>
        
        <BusketCard />
        
      </>
    );
  }
}
