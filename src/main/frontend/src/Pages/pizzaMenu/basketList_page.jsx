import React, { Component } from "react";
import { Link } from "react-router-dom";
import originalPizza from "../../img/pizza/originalPizza.jpg";
import vegetablePizza from "../../img/pizza/vegetablePizza.jpg";
import combinationPizza from "../../img/pizza/combinationPizza.jpg";
import pepperoniPizza from "../../img/pizza/pepperoniPizza.jpg";
import bulgogiPizza from "../../img/pizza/bulgogiPizza.jpg";

class basketList_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza_list: [
        {
          p_idx: 1,
          p_name: "Original Pizza",
          p_price: { p_L_price: 26000, p_M_price: 21000 },
          p_img: originalPizza,
        },
        {
          p_idx: 2,
          p_name: "Vegetable Pizza",
          p_price: { p_L_price: 28000, p_M_price: 23000 },
          p_img: vegetablePizza,
        },
        {
          p_idx: 3,
          p_name: "Combination Pizza",
          p_price: { p_L_price: 30000, p_M_price: 25000 },
          p_img: combinationPizza,
        },
        {
          p_idx: 4,
          p_name: "Pepperoni Pizza",
          p_price: { p_L_price: 29000, p_M_price: 24000 },
          p_img: pepperoniPizza,
        },
        {
          p_idx: 5,
          p_name: "Bulgogi Pizza",
          p_price: { p_L_price: 31000, p_M_price: 26000 },
          p_img: bulgogiPizza,
        },
      ],
    };
  }
  render() {
    return (
      <div className="basketList_page Body-Container">
        <h3 className="article_title">장바구니</h3>
        <hr></hr>
        <article>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>주문내역</th>
                <th>금액</th>
              </tr>
              <tr>
                <td>
                  <img src={originalPizza} alt="오리지널 피자" />
                </td>
                <td>오리지널 피자</td>
                <td>21,000원</td>
              </tr>
            </tbody>
          </table>

          <div className="totalPrice-container">
            <div className="pizzaPrice-box price-boxes">
              <span className="pizzaPrice-label">상품금액</span>
              <span className="pizzaPrice">
                <strong>21,000</strong>&nbsp;원
              </span>
            </div>
            <div>+</div>
            <div className="deliverPrice-box price-boxes">
              <span className="deliverPrice-label">배송비</span>
              <span className="deliverPrice">
                <strong>3,000</strong>&nbsp;원
              </span>
            </div>
            <div>=</div>
            <div className="totalPrice-box price-boxes">
              <span className="totalPrice-label">합계</span>
              <span className="totalPrice">
                <strong>24,000</strong>&nbsp;원
              </span>
            </div>
          </div>

          <div className="button_box">
            <Link to="/">
              <div className="button">홈으로</div>
            </Link>
            <Link to="/order_page">
              <div className="button">주문하기</div>
            </Link>
          </div>
        </article>
      </div>
    );
  }
}

export default basketList_page;
