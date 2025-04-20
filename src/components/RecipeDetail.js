import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const recipes = {
  salads: [
    {
      id: 1,
      title: "Крабов'є",
      description: "Рецепт с крабовыми палочками",
      ingredients: ["Крабовые палочки", "Яйца", "Майонез"],
      instruction: "Все змішати",
    },
    {
      id: 2,
      title: "Олів'є",
      description: "Классический салат оливье",
      ingredients: ["Картофель", "Морковь", "Майонез", "Мясо"],
      instruction: "Все змішати",
    },
  ],

  souce: [
    {
      id: 1,
      title: "Майонез",
      description: "Домашній майонез",
      ingredients: ["Олія", "Яйця", "Оцет", "Сіль"],
    },
    {
      id: 1,
      title: "Авокадо",
      description: "Соус із авокадо",
      ingredients: ["Авокадо", "Лимон", "Оливкова олія", "Сіль"],
    },
  ],

  baking: [
    {
      id: 1,
      title: "Хліб",
      description: "дріжджове тісто",
      ingredients: [
        "Тепла вода - склянка",
        "Борошно - 400гр",
        "дріжджі - столова ложка повна",
        "Олія - 100гр",
        "Оцет - столова ложка",
        "Сіль",
        "Цукор - столова ложка",
      ],
      instruction:
        "В теплій воді розчинити дріжджі і цукор. Додати оцет і олію. Щіпка солі. Додати борошно і замісити тісто. Набрати в руку олію і вимісити тісто олією. Перекласти в скляний посуд і накрити плівкою. Залишити підійматись на 2 години. Тісто підійде для випікання хліба, піцци, пиріжків з начинкою.",
    },
    {
      id: 1,
      title: "Авокадо",
      description: "Соус із авокадо",
      ingredients: ["Авокадо", "Лимон", "Оливкова олія", "Сіль"],
      instruction: "",
    },
  ],

  dessert: [
    {
      id: 1,
      title: "Хліб",
      description: "Домашній хліб",
      ingredients: ["Олія", "Яйця", "Оцет", "Сіль"],
    },
    {
      id: 1,
      title: "Авокадо",
      description: "Соус із авокадо",
      ingredients: ["Авокадо", "Лимон", "Оливкова олія", "Сіль"],
    },
  ],

  soup: [
    {
      id: 1,
      title: "Хліб",
      description: "Домашній хліб",
      ingredients: ["Олія", "Яйця", "Оцет", "Сіль"],
    },
    {
      id: 1,
      title: "Авокадо",
      description: "Соус із авокадо",
      ingredients: ["Авокадо", "Лимон", "Оливкова олія", "Сіль"],
    },
  ],

  meat: [
    {
      id: 1,
      title: "Хліб",
      description: "Домашній хліб",
      ingredients: ["Олія", "Яйця", "Оцет", "Сіль"],
    },
    {
      id: 1,
      title: "Авокадо",
      description: "Соус із авокадо",
      ingredients: ["Авокадо", "Лимон", "Оливкова олія", "Сіль"],
    },
  ],

  fish: [
    {
      id: 1,
      title: "Хліб",
      description: "Домашній хліб",
      ingredients: ["Олія", "Яйця", "Оцет", "Сіль"],
    },
    {
      id: 1,
      title: "Авокадо",
      description: "Соус із авокадо",
      ingredients: ["Авокадо", "Лимон", "Оливкова олія", "Сіль"],
    },
  ],

  marinades: [
    {
      id: 1,
      title: "Хліб",
      description: "Домашній хліб",
      ingredients: ["Олія", "Яйця", "Оцет", "Сіль"],
    },
    {
      id: 1,
      title: "Авокадо",
      description: "Соус із авокадо",
      ingredients: ["Авокадо", "Лимон", "Оливкова олія", "Сіль"],
    },
  ],
};

function RecipeDetail() {
  const { category, id } = useParams();
  const recipe = recipes[category]?.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Рецепт не найден</p>;
  }

  return (
    <div>
      <Header />
      <div className="page-content">
        <h1 className="title-recipe">{recipe.title}</h1>
        <p>{recipe.description}</p>
        <h3>Інгредієнти:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>{recipe.instruction}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
