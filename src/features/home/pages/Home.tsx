import BusinessesWorldwide from "../components/BusinessesWorldwide"
import GetStarted from "../components/GetStarted"
import Herosection from "../components/HeroSection"
import { ServiceCategories } from "../components/ServiceCategories"
import WhyShipGlobal from "../components/WhyShipGlobal"

const Home = () => {
  return (
    <div className="">
      <Herosection/>
      <WhyShipGlobal/>
      <ServiceCategories/>
      <BusinessesWorldwide/>
      <GetStarted/>
    </div>

  )
}

export default Home
