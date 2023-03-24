import React from "react"
import { CategoryItem } from "./CategoryItem"

export const CategoryList = ({ catalog = [] }) => {
    return (
        <div className="list">
            {catalog.map((cat) => (
                <CategoryItem key={cat.idCategory} {...cat} />
            ))}
        </div>
    )
}
