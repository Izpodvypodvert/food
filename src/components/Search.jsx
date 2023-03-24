import React, { useState } from "react"

export const Search = ({ callback = Function.prototype }) => {
    const [value, setValue] = useState("")
    const handleKey = (event) => {
        if (event.key === "Enter") {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        callback(value)
    }

    const reset = () => {
        setValue("")
        callback("")
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    value={value || ""}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className="btn"
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
            {value && (
                <button
                    className="waves-effect waves-light btn-small"
                    style={{
                        float: "right",
                    }}
                    onClick={reset}
                >
                    reset
                </button>
            )}
        </div>
    )
}
