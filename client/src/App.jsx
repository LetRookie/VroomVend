import { Routes, Route } from "react-router-dom"
import './assets/styles/styles.css'
import Home from "./components/home/Home"
import LastAdded from "./components/last-added/LastAdded"


function App() {

  return (
    <>
    <Home />
    <LastAdded />
    </>
  )
}

export default App
