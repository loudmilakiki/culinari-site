import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div>
        <Header />
        <div className="content-home">
          <section className="home-hero">
            <div className="home-section_title">
              <h1>Мої улюблені рецепти. Перевірено на собі!</h1>
            </div>
            <div className="home-section_pic">
              <img className="pic" src="../../img/food.png" alt="food" />
            </div>
          </section>
          <section className="recepi-section">
            <h2>Категорії рецептів</h2>
            <div className="recepi-section_conteiner swiper-conteiner">
              <ul className="swiper-wrapper recepi-section_list">
                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/salad.svg"
                      alt="photo"
                    />
                    <li className="recipe-header">
                      {/* <Link to="/recipes/souce">Салаты</Link> */}
                      <button>Салаты</button>
                    </li>
                  </article>
                </li>

                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/food.svg"
                      alt="Соуси"
                    />
                    <li className="recipe-header">
                      <button>Соуси</button>
                    </li>
                  </article>
                </li>

                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/bread.svg"
                      alt="Випічка"
                    />
                    <li className="recipe-header">
                      <button>Випічка</button>
                    </li>
                  </article>
                </li>

                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/cupcake.svg"
                      alt="Десерти"
                    />
                    <li className="recipe-header">
                      <button>Десерти</button>
                    </li>
                  </article>
                </li>

                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/meat.svg"
                      alt="М'ясо"
                    />
                    <li className="recipe-header">
                      <button>М'ясо</button>
                    </li>
                  </article>
                </li>

                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/fish.svg"
                      alt="Риба"
                    />
                    <li className="recipe-header">
                      <button>Риба</button>
                    </li>
                  </article>
                </li>

                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/bowl.svg"
                      alt="Супи"
                    />
                    <li className="recipe-header">
                      <button>Супи</button>
                    </li>
                  </article>
                </li>

                <li className="swiper-slide">
                  <article className="recepi-card">
                    <img
                      className="recepi-card-img"
                      src="../../img/jams.svg"
                      alt="Маринади"
                    />
                    <li className="recipe-header">
                      <button>Маринади</button>
                    </li>
                  </article>
                </li>

                <div className="recepi-card_text">
                  <p></p>
                </div>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
}

export default HomePage;