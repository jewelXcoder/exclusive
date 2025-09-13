import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import BestSellingProducts from '../components/BestSellingProducts/BestSellingProducts'
import Categories from '../components/Categories/Categories'
import Offer from '../components/Offer/Offer'
import ExploreOurProducts from '../components/ExploreOurProducts/ExploreOurProducts'
import NewArrival from '../components/NewArrival/NewArrival'
import Service from '../components/Service/Service'
import Footer from '../components/Footer/Footer'
import CopyRight from '../components/Footer/CopyRight'

const Home = () => {
  return (
    <>
     <Header/> 
     <Navbar/>
     <Banner/>
     <Categories/>  
     <BestSellingProducts/>
     <Offer/>
     <ExploreOurProducts/>
     <NewArrival/>
     <Service/>
     <Footer/>
     <CopyRight/>
    </>
  )
}

export default Home
