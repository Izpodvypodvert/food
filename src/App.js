import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
// import { Movie } from "./pages/Movie"
import { NotFound } from "./pages/NotFound"
import { Category } from "./pages/Category"
import { Recipe } from "./pages/Recipe"

function App() {
    return (
        <>
            <BrowserRouter basename="/food">
                <Header />
                <main className="container content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Тут рассмотриваютяс некоторые хуки: useParams,useNavigate, useLocation, useResolvedPath*/}
                        {/* <Route path="/movies/:id" element={<Movie />} /> */}
                        <Route path="/category/:name" element={<Category />} />
                        <Route path="/meal/:id" element={<Recipe />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
