import React from "react"
import { getAllCategories } from "../utils/api"
import { useState, useEffect } from "react"
import { Preloader } from "../components/Preloader"
import { CategoryList } from "../components/CategoryList"
import { Search } from "../components/Search"
import { useLocation, useNavigate } from "react-router-dom"

export const Home = () => {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])
    const { pathname, search } = useLocation()
    const history = useNavigate()

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        )
        history({
            pathname,
            search: `?search=${str}`,
        })
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories)
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.toLowerCase().split("=")[1])
                      )
                    : data.categories
            )
        })
    }, [search])

    return (
        <>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <>
                    <Search callback={handleSearch} />
                    <CategoryList catalog={filteredCatalog} />
                </>
            )}
        </>
    )
}
