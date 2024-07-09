import AboutSection from "../Components/AboutSection"
import CompaniesTable from "../Components/CompaniesTable"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IndexPoll from "../Components/IndexPoll"
import NavMenu from "../Components/NavMenu"
import PortfolioSection from "../Components/PortfolioSection"
import PotentialListings from "../Components/PotentialListings"
import Slider from "../Components/Slider"
import StoriesSection from "../Components/StoriesSection"

const Main = () => {
  return (
    <div className="bg-gray-100">
      <NavMenu/>
      <Header/>
      <IndexPoll/>
      <CompaniesTable/>
      <PotentialListings/>
      <Slider/>
      <StoriesSection/>
      <AboutSection/>
      <PortfolioSection/>

      <Footer/>
    </div>
  )
}

export default Main
