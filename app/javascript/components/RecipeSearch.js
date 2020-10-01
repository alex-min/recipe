import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function getCrsfToken() {
  return document.getElementsByName('csrf-token')[0].content;
}

function searchBody(search, ingredients, setIngredients) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await Axios.post('/search', ingredients, {
        headers: { 'X-CSRF-Token': getCrsfToken() }
      });
      setRecipes(response.data);
    })()
  }, [ingredients]);

  return <>
    <input type="submit" value="Ajouter cet ingredient" />
    <ul>
      {ingredients.map((ingredient, i) =>
        <li key={`${i}-${ingredient}`}>{ingredient}
          <button onClick={() => {
            setIngredients(ingredients.filter(ingredientList => ingredientList != ingredient));
          }}>supprimer</button>
        </li>
      )}
    </ul>

    <hr />
    <h3>Recettes disponibles avec ces ingredients:</h3>
    {recipes.length > 0 ? <ul>
      {recipes.map((r, i) => <li key={r.id}>{r.name} <span className="recipe-difficulty">{r.difficulty}</span></li>)}
    </ul> : <i>Aucune recette</i>}
  </>;
}

export default function RecipeSearch() {
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await Axios.post('/search', ingredients, {
        headers: { 'X-CSRF-Token': getCrsfToken() }
      });
      setRecipes(response.data);
    })()
  }, [ingredients]);

  return <form id="search" onSubmit={(e) => {
    e.preventDefault();
    setIngredients([...ingredients, search])
  }}>
    <h1>Recherchez une recette parmis les ingredients que vous avez dans votre cuisine:</h1>
    <input type="search"
      id="search-input"
      placeholder="Entrez un ingredient (oeuf, sel, poulet)..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
    {searchBody(search, ingredients, setIngredients)}
  </form>
}
