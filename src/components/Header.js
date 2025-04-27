import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav-header">
        <div className="content">
         
            <Link to="/">
              <img className="image" src="../img/logo.png" alt="logo" />
            </Link>
      

          <ul className="recipe-menu">
            <li className="recipe-header">
              <img className="img" src="../img/home.svg" alt="Головна" />
              <Link to="/" className="text-header">
                Головна
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../img/salad.svg" alt="Салати" />
              <Link to="/recipes/salads" className="text-header">
                Салати
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../img/food.svg" alt="Соуси" />
              <Link to="/recipes/souce" className="text-header">
                Соуси
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../../img/bread.svg" alt="Випічка" />
              <Link to="/recipes/baking" className="text-header">
                Випічка
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../../img/cupcake.svg" alt="Десерти" />
              <Link to="/recipes/dessert" className="text-header">
                Десерти
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../../img/meat.svg" alt="М'ясо" />
              <Link to="/recipes/meat" className="text-header">
                М'ясо
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../../img/fish.svg" alt="Риба" />
              <Link to="/recipes/fish" className="text-header">
                Риба
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../../img/bowl.svg" alt="Супи" />
              <Link to="/recipes/soup" className="text-header">
                Супи
              </Link>
            </li>

            <li className="recipe-header">
              <img className="img" src="../../img/jams.svg" alt="Маринади" />
              <Link to="/recipes/marinades" className="text-header">
                Маринади
              </Link>
            </li>
          </ul>

          <button className="header__burger menu-btn-open" type="button">
            <svg width="24" height="24">
              <use href="./images/menuburger.svg"></use>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
