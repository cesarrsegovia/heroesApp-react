import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DC, Hero, MarvelPage, Search } from "../pages"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}/>
                    <Route path="dc" element={<DC />}/>
                    <Route path="search" element={<Search />}/>
                    <Route path="hero/:id" element={<Hero />}/>
                    <Route path="/" element={<Navigate to="/marvel" />}/>
                </Routes>
            </div>
            
        </>
    )
}
