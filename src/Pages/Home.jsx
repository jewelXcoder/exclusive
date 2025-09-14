import React from 'react'
import Banner from '../components/Banner/Banner'
import BestSellingProducts from '../components/BestSellingProducts/BestSellingProducts'
import Categories from '../components/Categories/Categories'
import Offer from '../components/Offer/Offer'
import ExploreOurProducts from '../components/ExploreOurProducts/ExploreOurProducts'
import NewArrival from '../components/NewArrival/NewArrival'
import Service from '../components/Service/Service'


const Home = () => {
  return (
    <>

     <Banner/>
     <Categories/>  
     <BestSellingProducts/>
     <Offer/>
     <ExploreOurProducts/>
     <NewArrival/>
     <Service/>

    </>
  )
}

export default Home
