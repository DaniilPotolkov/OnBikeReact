import React from "react";
import Header from "./../Components/Header/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UnderConstruct from "./UnderConstruct/UnderConstruct";
import "./index1.css";
class Screen extends React.Component {
  render() {
    return (
      <Router>
        <div className="overalContainer">
          <Header />
          <Switch>
            <Route path="/dostavka"></Route>
            <Route path="/garantee"></Route>
            <Route path="/contact"></Route>
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
            <h2>Ты хуй</h2>
            </Route>
            <Route path="*">
              <h1>Doesn`t exist</h1>
              <h1> 404 not found</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Screen;
