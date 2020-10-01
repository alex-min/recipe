import React from "react";
class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      ingredients: []
    }
  }

  ingredients() {
    if (this.state.ingredients.length == 0) {
      return null;
    }
    return <ul>
      {this.state.ingredients.map(ingredient => <li>{ingredient}</li>)}
    </ul>;
  }

  render() {
    return (
      <div id="search">
        <h1>Recherchez une recette parmis les ingredients que vous avez dans votre cuisine</h1>
        <input type="search"
          id="search-input"
          placeholder="Entrez un ingredient (oeuf, sel, poulet)..."
          value={this.state.search || ''}
          onChange={e => { this.setState({ search: e.target.value }) }}
        /><button onClick={() => {
          this.setState({ ingredients: this.state.ingredients.concat(this.state.search) })
        }}>Ajouter cet ingredient</button>
        {this.ingredients()}
      </div>
    );
  }
}

export default RecipeSearch
