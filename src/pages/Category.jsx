import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFilteredCategory } from "../utils/api"
import { Preloader } from "../components/Preloader"
import { MealList } from "../components/MealList"

export const Category = () => {
    const { name } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    }, [name])

    return (
        <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
    )
}
