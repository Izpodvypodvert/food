import React from "react"
import { Meal } from "./Meal"
import { useNavigate } from "react-router-dom"

export const MealList = ({ meals }) => {
    const history = useNavigate()
    return (
        <>
            {" "}
            <button className="btn fixed" onClick={() => history("/")}>
                Go back
            </button>
            <div className="list">
                {meals.map((meal) => (
                    <Meal key={meal.idMeal} {...meal} />
                ))}
            </div>
        </>
    )
}
