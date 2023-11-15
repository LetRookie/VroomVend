import Header from "../header/Header"
import FeaturedCars from "../featured-cars/FeaturedCars"
import SearchModal from "../search-modal/SearchModal"

export default function Home() {

  return (
    <>
      <section id="home" className="welcome-hero">
      <Header />
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>get your desired car in resonable price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <SearchModal />
      </section>
      <FeaturedCars />
    </>
  )
}