import { Routes, Route } from "react-router-dom"
import './assets/styles/styles.css'
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Search from "./components/search-page/Search"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Search />
    </>
  )
}

export default App
