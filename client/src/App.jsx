import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import FeaturedCars from "./components/featured-cars/FeaturedCars"
import Catalog from "./components/catalog-page/Catalog"

function App() {

  return (
    <>
    <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Catalog />
      
      <Footer />



    </>
  )
}

export default App
