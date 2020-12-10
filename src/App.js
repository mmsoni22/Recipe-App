import React, { useEffect,useState }  from "react";
import Recipe from "./Recipe"
import "./App.css"


const App = () => {
  const APP_Key = "9d8f981b214800b0ee2cc6b123eb4cf0"
  const APP_ID = "65754daf"
 
const [recipes, setRecipe] = useState(['']);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken')


useEffect(() => {
 getRecipe();
},[query]);

const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`);
    const data = await response.json();
    setRecipe(data.hits)
    console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value)
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('')
}

  return (
    <div className = "App">
      <form className = "search-form"  onSubmit = {getSearch}>
        <input value = {search} onChange ={updateSearch} className = "search-bar" type = "text" placeholder ="Search food recipes"/>
          <button className = "search-button" type = "submit" >search</button> 
      </form>
      <div className = "recipes">
      {recipes.map(recipe => (
        <Recipe 
               title = {recipe.recipe.label}
               calories = {recipe.recipe.calories}
               image = {recipe.recipe.image}
               ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

 export default App;
