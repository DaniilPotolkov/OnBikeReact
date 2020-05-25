import React from "react";
import Header from "./../Components/Header/Header";
import Footer from "./../Components/Footer/Footer";
import Modal from './../Components/Modal/Modal';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MainScreen from "./Main/MainScreen";
import DeliverScreen from './Delivery/DeliveryScreem';
import GarantyScreen from './Garanty/GarantyScreen';
import ContactScreen from "./Contact/ContactScreen";
import MotorScreen from "./Motor/MotorScreen";
import "./index1.css";


// img
import productImg from "./../img/complect.jpg";

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
    name: "zhopa5 vozvrachenie chlena vzhopudani",
    price: "900",
    img: productImg,
  },
  {
    product_id: 6,
    name: "zhopa5 vozvrachenie chlena v zhopudani",
    price: "900",
    img: productImg,
  },
  {
    product_id: 7,
    name: "zhopa5 vozvrachenie chlena v zhopudani",
    price: "900",
    img: productImg,
    description: 'Максимальная скорость 38 км/ч\n Время заряда аккумулятора при полном разряде: 3 часа.\n Максимальное расстояние преодолеваемое на одном заряде - 35 км (без помощи педалирования, на ровной дороге)\nМаксимальное расстояние на одном заряде используя педалирование - зависит от того как часто помогать себе подключая мотор.\n \nВ состав комплекта входит:\n Заспицованное мотор-колесо 36v 250w заднее под трещотку или переднее на выбор Двойной усиленный обод (доступные размеры: 16", 20", 24", 26", 27,5", 28", 29") \n Аккумулятор li-ion 36v 8,7 ah размер 170х100x70мм Зарядное устройство 36v 2а \n Контроллер 36v 15А \n Сумочка для аккумулятора \n Ручка газа (курок под один палец) \n Максимальная скорость 38 км/ч\n Время заряда аккумулятора при полном разряде: 3 часа.\n Максимальное расстояние преодолеваемое на одном заряде - 35 км (без помощи педалирования, на ровной дороге)\nМаксимальное расстояние на одном заряде используя педалирование - зависит от того как часто помогать себе подключая мотор.\n \nВ состав комплекта входит:\n Заспицованное мотор-колесо 36v 250w заднее под трещотку или переднее на выбор Двойной усиленный обод (доступные размеры: 16", 20", 24", 26", 27,5", 28", 29") \n Аккумулятор li-ion 36v 8,7 ah размер 170х100x70мм Зарядное устройство 36v 2а \n Контроллер 36v 15А \n Сумочка для аккумулятора \n Ручка газа (курок под один палец) \n'
  },
];

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, modalId: null, };
  }
  toggleModal(id) {
    this.setState({ showModal: !this.state.showModal, modalId: id });
  }
  render() {
    return (
      <Router>
        <div className="overalContainer">
          <Header />
          <Switch>
            <Route path="/motor">
              <MotorScreen />
            </Route>
            <Route path="/dostavka">
              <DeliverScreen />
            </Route>
            <Route path="/garantee">
              <GarantyScreen />
            </Route>
            <Route path="/contact">
              <ContactScreen />
            </Route>
            <Route path="/gotov">
              <div className="all">
                <div className="container main-tovar">
                  <div className="col-lg-4">
                    <h2 className="zagolovok">Готовые наборы </h2>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div className="tovar">
                        <img src="/img/complect.jpg" alt=""></img>
                        <p>Комплект электрификации Лайт 250</p>
                        <p className="price">21 000 ₽</p>
                        <button className="podrobnee">
                          Подробнее о товаре
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="tovar">
                        <img src="/img/complect.jpg" alt=""></img>
                        <p>Комплект электрификации Лайт 250</p>
                        <p className="price">21 000 ₽</p>
                        <button className="podrobnee">
                          Подробнее о товаре
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="tovar">
                        <img src="/img/complect.jpg" alt=""></img>
                        <p>Комплект электрификации Лайт 250</p>
                        <p className="price">21 000 ₽</p>
                        <button className="podrobnee">
                          Подробнее о товаре
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="tovar">
                        <img src="/img/complect.jpg" alt=""></img>
                        <p>Комплект электрификации Лайт 250</p>
                        <p className="price">21 000 ₽</p>
                        <button className="podrobnee">
                          Подробнее о товаре
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/">
              <MainScreen products={products} modal={this.toggleModal.bind(this)} />
            </Route>
            <Route path="/battery"></Route>
            <Route path="/controller"></Route>
            <Route path="/accessories"></Route>
            <Route path="/electro-bike"></Route>
            <Route path="*">
              <h1>Doesn`t exist</h1>
              <h1> 404 not found</h1>
            </Route>
          </Switch>
          {this.state.showModal ? <Modal product={products[this.state.modalId]} toggler={this.toggleModal.bind(this)} /> : <Footer />}
        </div>
      </Router>
    );
  }
}

export default Screen;
