import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getMealById } from "../utils/api"
import { useEffect, useState } from "react"
import { Preloader } from "../components/Preloader"

export const Recipe = () => {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams()
    const history = useNavigate()

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0])
        })
    }, [id])
    return (
        <div>
            <button className="btn fixed" onClick={() => history(-1)}>
                Go back
            </button>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea && <h6>Area: {recipe.strArea}</h6>}
                    <p>{recipe.strInstructions}</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                                return null
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube && (
                        <div className="row">
                            <h5 style={{ margin: "2rem 0 1.5rem" }}>
                                Video recipe
                            </h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
