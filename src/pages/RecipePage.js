import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

  
    const recipes = {
      salads: [
        { id: 1, title: "Крабов'є" },
        { id: 2, title: "Олів'є" },
      ],

      souce: [
        { id: 1, title: "Майонез" },
        { id: 2, title: "Авокадо" },
      ],

      baking: [{ id: 1, title: "Хліб" }],

      dessert: [{ id: 1, title: "Панакота" }],

      soup: [{ id: 1, title: "Рибний" }],

      meat: [{ id: 1, title: "Битки" }],

      fish: [{ id: 1, title: "Риба" }],

      marinades: [{ id: 1, title: "Лечо" }],
};
    
function RecipePage() {
    const { category } = useParams();
    const categoryRecipes = recipes[category] || [];

  return (
    <div>
          <Header />
          <h2 className="title">Рецепти для {category}</h2>
          <ul>
              {categoryRecipes.map((recipe) => (
                  <li key={recipe.id}>
                      <Link to={`/recipes/${category}/${recipe.id}`}>{recipe.title}</Link>
                  </li>
              ))}
          </ul>
    </div>
  );
}

export default RecipePage;
