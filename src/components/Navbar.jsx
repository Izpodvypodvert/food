import { Link } from "react-router-dom"

const navigation = [
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Contact", path: "/contact" },
    { id: 3, title: "Repo", path: "https://github.com/michey85/react-shop" },
]

const Navbar = () => {
    return (
        <div>
            <Link to="/" className="brand-logo">
                Good Food
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {navigation.map(({ id, title, path }) => (
                    <li key={id}>
                        <Link to={path}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
