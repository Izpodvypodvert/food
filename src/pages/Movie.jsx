import React, { useState } from "react"
import {
    useParams,
    useNavigate,
    useLocation,
    useResolvedPath,
} from "react-router-dom"

export const Movie = () => {
    const value = useParams()
    // console.log(value.id)
    ////////////////////////////////////////
    const [path, setPath] = useState("")

    let history = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        history("/" + path)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setPath(e.target.value)
    }
    ////////////////////////////////////////////
    const url = useResolvedPath("").pathname
    // console.log("url", url)
    ///////////////////////////////////////////
    const loca = useLocation()
    // console.log("location", loca)
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={path} onChange={handleChange} />
            <button>Go home</button>
        </form>
    )
}
