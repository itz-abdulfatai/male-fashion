import CTA from "../components/home/CTA"
import Hero from "../components/home/Hero"
import LatestNews from "../components/home/LatestNews"
import Products from "../components/home/Products"
import ShowCase from "../components/home/ShowCase"

function Home() {
  return (
    <>
    <Hero/>
    <ShowCase/>
    <Products/>
    <CTA/>
    <LatestNews/>
    </>
  )
}

export default Home