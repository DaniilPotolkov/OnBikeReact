import React from "react";
import Header from "./../Components/Header/Header";
import Footer from "./../Components/Footer/Footer";
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
            <Route path="/dostavka">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Информация о доставке и оплате товара</h2>
                    <h3>Доставка</h3>
                    <ul>
                      <li>
                        Самовывоз
                        <p>
                          Адрес: Москва, 2-й Нагатинский проезд 2 стр. 4.
                          Забрать заказ в мастерской можно по предварительному
                          звонку, убедившись в наличии товара на складе.
                        </p>
                      </li>
                      <li>
                        Доставка по Москве и области.
                        <p>
                          Доставка осуществляется на следующий день, по Москве
                          "до двери" - 500 руб; по Московской области 1000 руб.
                        </p>
                      </li>
                      <li>
                        Доставка в регионы России.
                        <p>
                          Отправка товаров осуществляется транспортной компанией
                          «СДЭК» или «Почтой России» на следующий день после
                          оплаты
                        </p>
                      </li>
                    </ul>
                    <h3>Оплата</h3>
                    <ol>
                      <li>Наложенный платёж (СДЭК, Почта России )</li>
                      <li>
                        Наличные. Оплата товара осуществляется наличными курьеру
                        при доставке по г. Москва и МО, в мастерской при
                        получении.
                      </li>
                      <li>
                        Безналичная оплата по выписанному счету (оплата по
                        квитанции в отделении любого банка):
                      </li>
                      <h4>Реквизиты для оплаты через Тинькофф банк:</h4>
                      <p>
                        Юридический адрес организации: <br />
                        428003, Россия, Чувашская <br />
                        республика - Чувашия, г. Чебоксары, ул. Гагарина Ю., д
                        13, кв 6 <br />
                        ИНН: 212709671396 <br />
                        ОГРН: 317213000060873 <br />
                        Расчетный счет: 40802810400000345546 <br />
                        Банк: АО "ТИНЬКОФФ БАНК" <br />
                        Юридический адрес банка: Москва, 123060, 1-й
                        Волоколамский проезд, д. 10, стр. 1 <br />
                        Корр. счет банка: 30101810145250000974 <br />
                        ИНН банка: 7710140679 <br />
                        БИК банка: 044525974 <br />
                      </p>
                      <li>
                        Перевод на банковскую карту
                        <p>
                          Вы можете оплатить товар с помощью перевода на
                          банковскую карту. В комментарии при переводе укажите
                          ФИО и номер заказа.
                        </p>
                      </li>
                      <h4>Реквизиты для первода</h4>
                      <p>
                        Сбербанк 4276 7500 2374 9251 Получатель: Борисов Олег
                        Олегович <br />
                        Тинькофф 5536 9137 7997 8937 Получатель: Борисов Олег
                        Олегович <br />
                      </p>
                    </ol>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/garantee">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Условия гарантии и возврата товара</h2>
                    <p>
                      Мы гарантируем качество всех товаров, представленных в
                      магазине. Все товары проходят предпродажную проверку на
                      наличие заводского брака и каких либо возможных
                      неисправностей.
                    </p>
                    <p>
                      Гарантийный срок на товар указывается в товарном чеке.
                    </p>
                    <p className="bold">Гарантия на АКБ 1 год</p>
                    <p className="bold">Моторы - 6 месяцев</p>
                    <p className="bold">Остальное оборудование - 3 месяца</p>
                    <p>
                      Гарантийный ремонт осуществляется в течение сорока пяти
                      календарных дней, с момента передачи устройства. Обмен
                      изделия потребителем на аналогичное при выявлении
                      заводского брака может быть осуществлён в срок не более 14
                      суток со дня даты продажи изделия.
                    </p>
                    <p className="bold">
                      Обмен изделия производиться только в случае, если:
                    </p>
                    <ul>
                      <li>
                        Имеется гарантийный талон, товарный чек или электронный
                        чек(отчет) при оплате в онлайне.
                      </li>
                      <li>
                        Имеются все печатные вложения (инструкции, аннотации и
                        т.д) поставляемые вместе с изделием;
                      </li>
                      <li>
                        Потребителем сохранён товарный вид изделия: отсутствуют
                        механические и химические повреждения корпуса (сколы
                        лакокрасочного покрытия, потёртости, царапины, трещины),
                        внутренних схем, аксессуаров и упаковки;
                      </li>
                      <li>
                        Изделия и аксессуары не имеют следов попыток
                        неквалифицированного ремонта;
                      </li>
                      <li>
                        Сохранены все элементы упаковки изделия, в том числе все
                        защитные плёнки, защитные пакеты, сдерживающие шлейфы;
                      </li>
                      <li>Комплектность изделия и аксессуаров не нарушена.</li>
                    </ul>
                    <p className="bold">
                      Как происходит обмен при обнаружении заводского брака:
                    </p>
                    <p>
                      Если вы обнаружили заводской брак, то можно осуществить
                      обмен товара следующими способами. Вы связываетесь с нами
                      по тел. 8 908 305 55 32 либо по почте 606203@bk.ru, При
                      обращении необходимо уточнить номер заказа, кратко описать
                      проблему с товаром. Если на товаре имеются механические
                      повреждения , необходимо сделать фото, прислать на почту.
                      Далее мы отправляем вам курьера, для замены товара на
                      новый. Так же вы можете самостоятельно приехать к нам на
                      склад и произвести замену предварительно позвонив по
                      телефону 8 908 305 55 32.
                    </p>
                    <p>
                      В соответствии со статьей 25 закона РФ «О защите прав
                      потребителей», и постановлении Правительства РФ №55 от
                      09.01.1998 г., технически сложные товары бытового
                      назначения, на которые установлены гарантийные сроки (в
                      т.ч. бытовая радиоэлектронная аппаратура, автоэлектроника
                      и др.) не подлежат обмену или возврату в течение 14 дней в
                      случае, если они не подошли по размеру, расцветке,
                      габаритам, комплектации. Обмен и возврат осуществляется
                      только при обнаружении неустранимых недостатков. Гарантия
                      действует в случае, если недостатки или неисправности
                      возникли по вине изготовителя, при соблюдении следующих
                      условий: товар должен быть использован в строгом
                      соответствии с техническими стандартами и требованиями
                      безопасности.
                    </p>
                    <p>
                      При доставке покупатель имеет право в присутствии курьера
                      проверить внешний вид товара и комплектность поставки.
                      После момента передачи товара покупателю претензии по
                      внешнему виду и комплектации не принимаются (согласно со
                      ст. 458 и 459 ГК РФ). Приобретение товара с гарантийным
                      талоном влечёт автоматическое согласие с гарантийными
                      обязательствами. Претензии к внешнему виду, комплектации,
                      качеству аксессуаров, аккумуляторных батарей, а так же по
                      наличию любых внешних механических повреждений после
                      покупки изделия не принимаются.
                    </p>
                    <p className="bold">
                      В гарантии может быть отказано в следующих случаях:
                    </p>
                    <ul>
                      <li>
                        В случае не правильно или не полностью заполненного
                        гарантийного талона или товарного чека(электронного
                        чека-отчета), при отсутствии гарантийного талона,
                        товарного чека (электронного чека-отчета, исправлений в
                        товарном чеке, отсутствии подписи продавца или
                        покупателя, несовпадений серийного номера изделий с
                        серийным номером указанном в гарантийном талоне;
                      </li>
                      <li>
                        В случае нарушения правил и условий эксплуатации,
                        изложенных в инструкции по эксплуатации (при наличии)
                        изделия или гарантийном талоне;
                      </li>
                      <li>
                        Если изделие имеет следы попыток неквалифицированного
                        ремонта;
                      </li>
                      <li>
                        Если дефект вызван изменением конструкции или схемы
                        изделия, не предусмотренным изготовителем;
                      </li>
                      <li>
                        Если дефект вызван несчастным случаем, действиями
                        непреодолимой силы, действиями третьих лиц или
                        действиями потребителя;
                      </li>
                      <li>
                        Если повреждения вызваны попаданием внутрь изделия
                        посторонних веществ, предметов, жидкостей, насекомых;
                      </li>
                      <li>
                        Если дефект вызван механическим повреждением изделия;
                      </li>
                      <li>
                        Если дефект вызван несоответствием стандартам
                        телекоммуникационных питающих кабельных сетей, или
                        другими внешними факторами;
                      </li>
                      <li>
                        Если дефект вызван использованием нестандартных или не
                        качественных аксессуаров, принадлежностей, носителей
                        информации;
                      </li>
                    </ul>
                    <p>
                      Продавец снимает с себя ответственность за возможный вред,
                      прямо или косвенно нанесённый проданным изделием
                      автомобилю, людям, домашним животным или имуществу, в
                      случае если это произошло в результате не соблюдения
                      правил и условий эксплуатации, установки изделий, действий
                      потребителя, третьих лиц, или обстоятельств не преодолимой
                      силы.
                    </p>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/contact">
              <h2>
                Пожалуйста, согласовывайте Ваш приезд для подготовки заказа
              </h2>
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <p className="bold">Москва</p>
                    <p>
                      ул. Генерала Антонова 3А <br />8 960 312 0107
                    </p>
                    <p className="bold">Чебоксары</p>
                    <p>
                      пр. Максима Горького 15 <br />8 960 312 0107
                    </p>

                    <p className="bold">E-mail</p>
                    <p>606203@bk.ru</p>
                    <p className="bold">Часы работы</p>
                    <p>
                      Пн - Пт с 10 до 19 <br />
                      Сб - Вс - выходной
                    </p>
                  </div>
                  <div className="col-lg-7">
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad67149e847b5d314d99f3fa15a2bbd7bc4a5cdac133a1996d6a2c23964d17e2d&amp;source=constructor" width="600" height="436" frameborder="0"></iframe>
                  </div>
                </div>
              </div>
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
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Популярные товары</h2>
                    <div className="slider-hot">
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
              </div>
            </Route>
            <Route path="*">
              <h1>Doesn`t exist</h1>
              <h1> 404 not found</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Screen;