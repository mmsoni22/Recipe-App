import React from "react";
import "./App.css"

const Recipe = ({title, calories,image, ingredients}) => {
    return (
        <div className = "recipe-box">
            <h1 className = "heading">{title}</h1>
            <ol >
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className = "calories">{Math.round(calories)} Calories</p>
            <img src = {image} alt = "" />

        </div>
    )
}

export default Recipe;