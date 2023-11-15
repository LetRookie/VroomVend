import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import FeaturedCars from "./components/featured-cars/FeaturedCars"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />


    </>
  )
}

export default App
