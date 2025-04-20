import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav-header">
        <ul className="component-header">
          <div className="content">
            <img className="image" src="../img/logo.png" alt="logo"/>
            <img className="img" src="../../img/home.svg" alt="Головна" />
            <li className="recipe-header">
              <Link to="/" className="text-header">
                Головна
              </Link>
            </li>

            {/* <img className="img" src="../../img/salad.svg" alt="Салати" />
            <li className="recipe-header">
              <Link to="/recipes/salads">Салати</Link>
            </li> */}

            {/* <img className="img" src="../../img/food.svg" alt="Соуси" />
            <li className="recipe-header">
              <Link to="/recipes/souce">Соуси</Link>
            </li> */}
          </div>
          <div className="content">
            {/* <img className="img" src="../../img/bread.svg" alt="Випічка" />
            <li className="recipe-header">
              <Link to="/recipes/baking">Випічка</Link>
            </li> */}
{/* 
            <img className="img" src="../../img/cupcake.svg" alt="Десерти" />
            <li className="recipe-header">
              <Link to="/recipes/dessert">Десерти</Link>
            </li> */}

            {/* <img className="img" src="../../img/meat.svg" alt="М'ясо" />
            <li className="recipe-header">
              <Link to="/recipes/meat">М'ясо</Link>
            </li> */}

            {/* <img className="img" src="../../img/fish.svg" alt="Риба" />
            <li className="recipe-header">
              <Link to="/recipes/fish">Риба</Link>
            </li> */}

            {/* <img className="img" src="../../img/bowl.svg" alt="Супи" />
            <li className="recipe-header">
              <Link to="/recipes/soup">Супи</Link>
            </li> */}

            {/* <img className="img" src="../../img/jams.svg" alt="Маринади" />
            <li className="recipe-header">
              <Link to="/recipes/marinades">Маринади</Link>
            </li> */}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
